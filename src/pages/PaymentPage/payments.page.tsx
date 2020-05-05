import React from 'react';
import { connect } from 'react-redux';
import { getPaymentsAction } from '../../core/actions';
import { ActionCreator, AnyAction } from 'redux';
import { IPayments } from '../../core/payee/payee.types';
import Layout from '../../../src/components/Layout/layout';
import './payments.style.css';
var moment = require('moment');

interface IPaymentsPageProps {
  payments: IPayments[];
  getPayments: ActionCreator<AnyAction>;
}

class PaymentsPage extends React.Component<IPaymentsPageProps> {
  componentDidMount() {
    fetch('http://localhost:3001/payment', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        this.props.getPayments(result);
      });
  }

  render() {
    const { payments } = this.props;
    return (
      <Layout>
        <div className="payments">
          {payments.map((payment: IPayments) => {
            const total = payment.total;
            const numberOfPayees = payment.numberOfPayees;
            const time = moment(payment.createdAt).format(
              'MMMM Do YYYY, h:mm a'
            );
            const companyBalance = payment.companyBalance;
            const balance = companyBalance - total;
            return (
              <div className="payment">
                <div className="payments-history">
                  <div className="payments-information">
                    <div>
                      <ol>
                        <li>
                          <strong>Time of payments: </strong>
                          {time}
                        </li>
                        <li>
                          <strong>Total: </strong>
                          {total}
                        </li>
                        <li>
                          <strong>Number of payees:</strong>
                          {numberOfPayees}
                        </li>
                      </ol>
                    </div>
                    <div className="balance_history">
                      <div className="companyBalance">
                        <p>{companyBalance}</p>
                      </div>
                      <div className="total">
                        <p>-{total}</p>
                      </div>
                      <div className="balance">
                        <p>Balance: {balance}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    payments: state.payments,
  };
};

const dispatchToProps = {
  getPayments: getPaymentsAction,
};

export default connect(mapStateToProps, dispatchToProps)(PaymentsPage);

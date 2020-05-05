import React from 'react';
import { connect } from 'react-redux';
import { IPayee, ICompany } from '../../core/payee/payee.types';
import PayeeCard from '../../composed-components/payee/PayeeCard/payee-card.component';
import PayeeForm from '../../composed-components/payee/PayeeForm/payee-form.component';
import Layout from '../../../src/components/Layout/layout';
import {
  createPayeeAction,
  deletePayeeAction,
  activePayeeAction,
  deactivatePayeeAction,
  paymentPayeeAction,
  getPayeesSuccessAction,
} from '../../core/actions';

import PayeePageHeader from './PayeePageHeader';
import Alert from '../../components/Alert/alert';
import { ActionCreator, AnyAction } from 'redux';

import './payees.page.style.css';

interface IPayeesPageProps {
  company: any;
  companyBalance: number;
  payees: IPayee[];
  createPayeeAction: ActionCreator<AnyAction>;
  deletePayeeAction: ActionCreator<AnyAction>;
  activePayeeAction: ActionCreator<AnyAction>;
  deactivatePayeeAction: ActionCreator<AnyAction>;
  paymentPayeeAction: ActionCreator<AnyAction>;
  getPayees: ActionCreator<AnyAction>;
}

interface IPayeesPageState {
  disabled: boolean;
  activeId: string | null;
  formOpened: boolean;
  activate: boolean;
  deactivate: boolean;
  showSuccessMessage: boolean;
  showNotPayeesMessage: boolean;
  showBalanceMessage: boolean;
}

class PayeesPage extends React.Component<IPayeesPageProps, IPayeesPageState> {
  state = {
    disabled: false,
    activeId: null,
    formOpened: false,
    formClosed: true,
    activate: false,
    deactivate: true,
    showSuccessMessage: false,
    showNotPayeesMessage: false,
    showBalanceMessage: false,
  };

  componentDidMount() {
    fetch('http://localhost:3001/payee', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        console.log({ result });
        this.props.getPayees(result);
      });
  }

  calculatePayeesTotalSalary = (): number => {
    const { payees } = this.props;
    return payees.reduce((acc, item) => acc + Number(item.salary), 0);
  };

  getUsersAdminsListNames = (): string => {
    const { payees } = this.props;
    return payees.reduce((acc, payee) => {
      const admin = 'ADMIN';
      const roles = payee.roles;
      const name = `${payee.firstName} ${payee.lastName}`;

      if (roles.includes(admin)) {
        const comma = acc.length ? ', ' : '';
        return acc + comma + name;
      }
      return acc;
    }, '');
  };

  findHighestSalary = (): number => {
    const { payees } = this.props;
    let userData = payees[0];
    payees.forEach(item => {
      const payee = item;
      const userSalary = payee.salary;
      if (userData.salary < userSalary) {
        userData = payee;
      }
    });
    if (userData) {
      return userData.salary;
    }
    return 0;
  };

  setOpenedId = (id: string | null): void => {
    this.setState({ activeId: id });
  };

  deletePayee = (payeeId: string) => {
    fetch(`http://localhost:3001/payee/${payeeId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(result => this.props.deletePayeeAction(result));
  };

  activePayee = (payeeId: string) => {
    const reqBody = { active: true };
    fetch(`http://localhost:3001/payee/activate/${payeeId}`, {
      method: 'PUT',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => this.props.activePayeeAction(result));
  };

  deactivatePayee = (payeeId: string) => {
    const reqBody = { active: false };
    fetch(`http://localhost:3001/payee/activate/${payeeId}`, {
      method: 'PUT',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => this.props.deactivatePayeeAction(result));
  };

  openForm = (): void => {
    this.setState({ formOpened: true });
  };

  closeForm = (): void => {
    this.setState({ formOpened: false });
  };

  payeesMassage = (): void => {
    this.setState({ showNotPayeesMessage: true });
  };

  closePayeesMassage = (): void => {
    this.setState({ showNotPayeesMessage: false });
  };

  balanceMassage = (): void => {
    this.setState({ showBalanceMessage: true });
  };

  closeBalanceMassage = (): void => {
    this.setState({ showBalanceMessage: false });
  };

  successMassage = (): void => {
    this.setState({ showSuccessMessage: true });
  };

  closeSuccessMassage = (): void => {
    this.setState({ showSuccessMessage: false });
  };

  active = (): void => {
    this.setState({ activate: true });
  };

  deactivate = (): void => {
    this.setState({ activate: false });
  };

  createPayee = (data: any) => {
    fetch('http://localhost:3001/payee/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => this.props.createPayeeAction(result));
    this.closeForm();
  };

  handlePayClick = () => {
    this.setState({ disabled: false });
    const { payees, companyBalance, company } = this.props;
    const activePayee = payees.filter(item => item.active === true);
    const totalSalary = activePayee.reduce(
      (acc, item) => acc + Number(item.salary),
      0
    );

    const payment = {
      total: totalSalary,
      numberOfPayees: activePayee.length,
      companyBalance: companyBalance,
      companyId: company._id,
    };

    if (totalSalary > companyBalance) {
      return this.setState({ showBalanceMessage: true });
    } else if (!totalSalary) {
      return this.setState({ showNotPayeesMessage: true });
    } else if (totalSalary) {
      fetch('http://localhost:3001/payment/', {
        method: 'POST',
        body: JSON.stringify(payment),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then((company: ICompany) => {
          localStorage.setItem('company', JSON.stringify(company));
          this.props.paymentPayeeAction(company);
          this.setState({ disabled: true });
          this.setState({ disabled: false });
        })
        .catch(console.error);
    }
  };

  render() {
    const {
      disabled,
      activeId,
      formOpened,
      showSuccessMessage,
      showNotPayeesMessage,
      showBalanceMessage,
    } = this.state;
    const { payees, companyBalance } = this.props;
    return (
      <Layout>
        <div className="payee-page">
          <PayeePageHeader
            disabled={disabled}
            companyBalance={companyBalance}
            payeesCount={payees.length}
            totalSalary={this.calculatePayeesTotalSalary()}
            adminNames={this.getUsersAdminsListNames()}
            highestSalary={this.findHighestSalary()}
            onAddButtonClick={this.openForm}
            handlePayClick={() => this.handlePayClick()}
          />

          {showSuccessMessage && (
            <div className="close-button">
              <p>
                <Alert
                  message={'SUCCESS ALERT: Payment was successful!'}
                  onClose={this.closeSuccessMassage}
                  mod={'success'}
                />
              </p>
            </div>
          )}
          {showNotPayeesMessage && (
            <div className="close-button">
              <p>
                <Alert
                  message={'WARNING ALERT:The are not payees to pay!'}
                  onClose={this.closePayeesMassage}
                  mod={'warning'}
                />
              </p>
            </div>
          )}
          {showBalanceMessage && (
            <div className="close-button">
              <p>
                <Alert
                  message={'DANGER ALERT:Not enough money!'}
                  onClose={this.closeBalanceMassage}
                  mod={'danger'}
                />
              </p>
            </div>
          )}
          {!formOpened ? (
            <div className="payee-page__payees-list">
              {payees.map((payee: IPayee) => {
                const isOpened: boolean = activeId === payee._id;
                return (
                  <PayeeCard
                    payee={payee}
                    key={payee._id}
                    isOpened={isOpened}
                    handleSeeMoreBtnClick={() => this.setOpenedId(payee._id)}
                    handleSeeLessBtnClick={() => this.setOpenedId(null)}
                    handleDeleteBtnClick={() => this.deletePayee(payee._id)}
                    handleActiveBtnClick={() => this.activePayee(payee._id)}
                    handleDeactivateBtnClick={() =>
                      this.deactivatePayee(payee._id)
                    }
                  />
                );
              })}
            </div>
          ) : (
            <div>
              <PayeeForm onClose={this.closeForm} onSave={this.createPayee} />
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    payees: state.payees,
    companyBalance: state.company.balance,
    company: state.company,
  };
};

const dispatchToProps = {
  deletePayeeAction,
  createPayeeAction,
  activePayeeAction,
  deactivatePayeeAction,
  paymentPayeeAction,
  getPayees: getPayeesSuccessAction,
};

export default connect(mapStateToProps, dispatchToProps)(PayeesPage);

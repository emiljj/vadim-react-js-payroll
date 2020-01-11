import React from 'react';
import { connect } from 'react-redux';
import { IPayee } from '../../core/payee/payee.types';
import PayeeCard from '../../composed-components/payee/PayeeCard/payee-card.component';
import PayeeForm from '../../composed-components/payee/PayeeForm/payee-form.component';
import {
  createPayeeAction,
  deletePayeeAction,
  activePayeeAction,
  deactivePayeeAction,
  payPayeeAction,
} from '../../core/actions';

import './payees.container.style.css';
import PayeePageHeader from './PayeePageHeader';
import { ActionCreator, AnyAction } from 'redux';

interface IPayeeContainerProps {
  companyBalance: number;
  payees: IPayee[];
  createPayeeAction: ActionCreator<AnyAction>;
  deletePayeeAction: ActionCreator<AnyAction>;
  activePayeeAction: ActionCreator<AnyAction>;
  deactivePayeeAction: ActionCreator<AnyAction>;
  payPayeeAction: ActionCreator<AnyAction>;
}

interface IPayeeContainerState {
  activeId: number | null;
  formOpened: boolean;
  activate: boolean;
  deactivate: boolean;
  toPay: boolean;
}

class PayeesContainer extends React.Component<
  IPayeeContainerProps,
  IPayeeContainerState
> {
  state = {
    activeId: null,
    formOpened: false,
    formClosed: true,
    activate: false,
    deactivate: true,
    toPay: false,
  };

  calculatePayeesTotalSalary = (): number => {
    const { payees } = this.props;
    return payees.reduce((acc, item) => acc + Number(item.salary), 0);
  };

  getUsersAdminsListNames = (): string => {
    const { payees } = this.props;
    return payees.reduce((acc, payee) => {
      const admin = 'ADMIN';
      const role = payee.role;
      const name = `${payee.firstName} ${payee.lastName}`;

      if (role.includes(admin)) {
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

  setOpenedId = (id: number | null): void => {
    this.setState({ activeId: id });
  };

  deletePayee = (payeeId: number) => {
    this.props.deletePayeeAction(payeeId);
  };

  activePayee = (payeeId: number) => {
    this.props.activePayeeAction(payeeId);
  };

  deactivePayee = (payeeId: number) => {
    this.props.deactivePayeeAction(payeeId);
  };

  openForm = (): void => {
    this.setState({ formOpened: true });
  };

  closeForm = (): void => {
    this.setState({ formOpened: false });
  };

  active = (): void => {
    this.setState({ activate: true });
  };

  deactive = (): void => {
    this.setState({ activate: false });
  };

  createPayee = (data: any) => {
    const newPayee = Object.assign(data, {
      id: Math.random(),
      role: ['USER'],
      active: false,
    });
    this.props.createPayeeAction(newPayee);
    this.closeForm();
  };

  handlePayClick = (): number => {
    const { payees } = this.props;
    const totalSalary = payees.reduce(
      (acc, item) => acc + Number(item.salary),
      0
    );
    this.props.payPayeeAction(totalSalary);
    this.setState({ toPay: true });
    return totalSalary;
  };

  render() {
    const { activeId, formOpened } = this.state;
    const { payees, companyBalance } = this.props;
    console.log('props', this.props);
    return (
      <div className="payee-container">
        <PayeePageHeader
          companyBalance={companyBalance}
          payeesCount={payees.length}
          totalSalary={this.calculatePayeesTotalSalary()}
          adminNames={this.getUsersAdminsListNames()}
          highestSalary={this.findHighestSalary()}
          onAddButtonClick={this.openForm}
          handlePayClick={() => this.handlePayClick()}
        />
        {!formOpened ? (
          <div className="payee-container__payees-list">
            {payees.map((payee: IPayee) => {
              const isOpened: boolean = activeId === payee.id;
              return (
                <PayeeCard
                  payee={payee}
                  key={payee.id}
                  isOpened={isOpened}
                  handleSeeMoreBtnClick={() => this.setOpenedId(payee.id)}
                  handleSeeLessBtnClick={() => this.setOpenedId(null)}
                  handleDeleteBtnClick={() => this.deletePayee(payee.id)}
                  handleActiveBtnClick={() => this.activePayee(payee.id)}
                  handleDeactiveBtnClick={() => this.deactivePayee(payee.id)}
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
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log({ state });
  return {
    payees: state.payees,
    companyBalance: state.companyBalance,
  };
};

const dispatchToProps = {
  deletePayeeAction,
  createPayeeAction,
  activePayeeAction,
  deactivePayeeAction,
  payPayeeAction,
};

export default connect(mapStateToProps, dispatchToProps)(PayeesContainer);

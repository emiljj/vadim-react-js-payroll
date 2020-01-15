import React from 'react';
import { connect } from 'react-redux';
import { IPayee } from '../../core/payee/payee.types';
import PayeeCard from '../../composed-components/payee/PayeeCard/payee-card.component';
import PayeeForm from '../../composed-components/payee/PayeeForm/payee-form.component';
import {
  createPayeeAction,
  deletePayeeAction,
  activePayeeAction,
  deactivatePayeeAction,
  payPayeeAction,
} from '../../core/actions';

import './payees.container.style.css';
import PayeePageHeader from './PayeePageHeader';
import Alert from '../../components/alert';
import { ActionCreator, AnyAction } from 'redux';

interface IPayeeContainerProps {
  companyBalance: number;
  payees: IPayee[];
  createPayeeAction: ActionCreator<AnyAction>;
  deletePayeeAction: ActionCreator<AnyAction>;
  activePayeeAction: ActionCreator<AnyAction>;
  deactivatePayeeAction: ActionCreator<AnyAction>;
  payPayeeAction: ActionCreator<AnyAction>;
}

interface IPayeeContainerState {
  activeId: number | null;
  formOpened: boolean;
  activate: boolean;
  deactivate: boolean;
  showSuccessMessage: boolean;
  showNotPayeesMessage: boolean;
  showBalanceMessage: boolean;
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
    showSuccessMessage: false,
    showNotPayeesMessage: false,
    showBalanceMessage: false,
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

  deactivatePayee = (payeeId: number) => {
    this.props.deactivatePayeeAction(payeeId);
  };

  openForm = (): void => {
    this.setState({ formOpened: true });
  };

  closeForm = (): void => {
    this.setState({ formOpened: false });
  };

  payeesMassage = (): void => {
    this.setState({ showNotPayeesMessage: false });
  };

  balanceMassage = (): void => {
    this.setState({ showBalanceMessage: false });
  };

  active = (): void => {
    this.setState({ activate: true });
  };

  deactivate = (): void => {
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

  handlePayClick = () => {
    const { payees, companyBalance } = this.props;
    const activePayee = payees.filter(item => item.active === true);
    const totalSalary = activePayee.reduce(
      (acc, item) => acc + Number(item.salary),
      0
    );

    if (totalSalary > companyBalance) {
      return this.setState({ showBalanceMessage: true });
    } else if (!totalSalary) {
      return this.setState({ showNotPayeesMessage: true });
    } else if (totalSalary) {
      this.setState({ showSuccessMessage: true });
      return this.props.payPayeeAction(totalSalary);
    }
  };

  render() {
    const {
      activeId,
      formOpened,
      showSuccessMessage,
      showNotPayeesMessage,
      showBalanceMessage,
    } = this.state;
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

        {showSuccessMessage && (
          <div className="close-button">
            <p>Payment was successful!</p>
            <div className="close-success" role="button">
              x
            </div>
          </div>
        )}
        {showNotPayeesMessage && (
          <div className="close-button">
            <p>The are not payees to pay!</p>
            <div className="close-payees" role="button">
              x
            </div>
          </div>
        )}
        {showBalanceMessage && (
          <div className="close-button">
            <p>Not enough money!</p>
            <div className="close-money" role="button">
              x
            </div>
          </div>
        )}
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
                  handleDeactivateBtnClick={() =>
                    this.deactivatePayee(payee.id)
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
  deactivatePayeeAction,
  payPayeeAction,
};

export default connect(mapStateToProps, dispatchToProps)(PayeesContainer);

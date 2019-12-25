import React from 'react';
import { IPayee } from '../../core/payee/payee.types';
import { testData } from './test.data';
import PayeeCard from '../../composed-components/payee/PayeeCard/payee-card.component';
import PayeeForm from '../../composed-components/payee/PayeeForm/payee-form.component';

import './payees.container.style.css';
import PayeePageHeader from './PayeePageHeader';

interface IPayeeContainerProps {}

interface IPayeeContainerState {
  payees: IPayee[];
  activeId: number | null;
  formOpened: boolean;
  formClosed: boolean;
}

class PayeesContainer extends React.Component<
  IPayeeContainerProps,
  IPayeeContainerState
> {
  state = {
    payees: testData,
    activeId: null,
    formOpened: false,
    formClosed: true,
  };

  calculatePayeesTotalSalary = (): number => {
    const { payees } = this.state;
    return payees.reduce((acc, item) => acc + item.salary, 0);
  };

  getUsersAdminsListNames = (): string => {
    const { payees } = this.state;
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
    const { payees } = this.state;
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
    const filtered = this.state.payees.filter(item => item.id !== payeeId);
    this.setState({ payees: filtered });
  };

  openForm = (): void => {
    this.setState({ formOpened: true });
  };

  closeForm = (): void => {
    this.setState({ formOpened: false });
  };

  createPayee = (data: any) => {
    const { payees } = this.state;
    const newPayee = Object.assign(data, {
      id: Math.random(),
      role: ['USER'],
    });
    const newPayeesList = [newPayee, ...payees];
    this.setState({ payees: newPayeesList });
    this.closeForm();
  };

  render() {
    const { activeId, payees, formOpened } = this.state;
    return (
      <div className="payee-container">
        <PayeePageHeader
          payeesCount={payees.length}
          totalSalary={this.calculatePayeesTotalSalary()}
          adminNames={this.getUsersAdminsListNames()}
          highestSalary={this.findHighestSalary()}
          onAddButtonClick={this.openForm}
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

export default PayeesContainer;

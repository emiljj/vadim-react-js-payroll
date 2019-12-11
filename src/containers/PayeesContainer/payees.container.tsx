import React from 'react';
import { IPayee } from '../../core/payee/payee.types';
import { testData } from './test.data';
import PayeeCard from '../../composed-components/payee/PayeeCard/payee-card.component';

import './payees.container.style.css';

interface IPayeeContainerProps {}

interface IPayeeContainerState {
  payees: IPayee[];
  activeId: number | null;
  formOpened: boolean;
  formAddOpened: boolean;
}

class PayeesContainer extends React.Component<
  IPayeeContainerProps,
  IPayeeContainerState
> {
  state = {
    payees: testData,
    activeId: null,
    formOpened: false,
    formAddOpened: false,
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
    for (let i = 0; i < payees.length; i++) {
      const payee = payees[i];
      const userSalary = payee.salary;
      if (userData.salary < userSalary) {
        userData = payee;
      }
    }
    return userData.salary;
  };

  setOpenedId = (id: number | null): void => {
    this.setState({ activeId: id });
  };

  OpenForm = (): void => {
    this.setState({ formOpened: true });
  };

  OpenAddForm = (): void => {
    this.setState({ formAddOpened: true });
  };

  render() {
    const { activeId, payees, formOpened, formAddOpened } = this.state;
    const payeesList = (
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
            />
          );
        })}
      </div>
    );
    return (
      <div className="payee-container">
        <div className="payee-container__header">
          <div>
            <p>Payees count: {payees.length} </p>
          </div>
          <div>
            <p>Total salary: {this.calculatePayeesTotalSalary()} </p>
          </div>
          <div>
            <p>Admin: {this.getUsersAdminsListNames()}</p>
          </div>
          <div>
            <p>Highest salary: {this.findHighestSalary()}</p>
          </div>
          <button onClick={this.OpenForm}>ADD</button>
        </div>
        {!formOpened ? (
          payeesList
        ) : (
          <div>
            {!formAddOpened ? (
              <div>
                <button onClick={this.OpenAddForm}>Cancel</button>
                <p>Form added users</p>
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default PayeesContainer;

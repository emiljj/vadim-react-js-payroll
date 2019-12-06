import React from 'react'
import { IPayee } from '../../core/payee/payee.types'
import { testData } from './test.data';
import PayeeCard from '../../composed-components/payee/PayeeCard/payee-card.component';

import './payees.container.style.css';

interface IPayeeContainerProps {}

interface IPayeeContainerState {
  payees: IPayee[];
  activeId: number | null;
}

class PayeesContainer extends React.Component<IPayeeContainerProps, IPayeeContainerState> {
  state = {
    payees: testData,
    activeId: null,
  }

  calculatePayeesTotalSalary = (): number => {
    const { payees } = this.state;
    return payees.reduce((acc, item) => acc + item.salary, 0);
  }

  getUsersAdminsListNames = (): string[] => {
    return ['Petro']
  }

  findHighestSalary = (): number => {
    const { payees } = this.state;
    let HighestSalary = payees[0];
    for (let i = 0; i < payees.length; i++) {
      const Salaries = payees[i];
      const UserSalary = Salaries.salary;
      if (HighestSalary.salary < UserSalary) {
        HighestSalary = Salaries;
      }
    }
    return HighestSalary.salary
  }

  setOpenedId = (id: number | null): void => {
    this.setState({ activeId: id });
  }
  
  render() {
    const { activeId, payees } = this.state;
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
        </div>
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
            />)
        })}
        </div>
      </div>
    );
  }
}

export default PayeesContainer;

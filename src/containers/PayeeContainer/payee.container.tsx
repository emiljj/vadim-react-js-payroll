import React from 'react'
import { IPayee } from '../../core/payee/payee.types'
import { testData } from './test.data';
import PayeeCard from '../../composed-components/payee/PayeeCard/payee-card.component';

import './payee.container.style.css';

interface IPayeeContainerProps {}

interface IPayeeContainerState {
  payees: IPayee[]
}

class PayeeContainer extends React.Component<IPayeeContainerProps, IPayeeContainerState> {
  state = {
    payees: testData,
    activeId: null
  }

  calculatePayeesTotalSalary = () => {}

  findUserByRole = () => {}

  findHighestSalary = () => {}
  
  render() {
    return (
      <div className="payee-container">
        <div className="payee-container__header">
          <div>
            <p>Payees count: {0} </p> 
          </div>
          <div>
            <p>Total salary: {0} </p> 
          </div>
          <div>
            <p>Admin: {'Admin Name'}</p>
          </div>
          <div>
            <p>Highest salary: {1000}</p>
          </div>
        </div>
        <div className="payee-container__payees-list">
        {this.state.payees.map((payee: IPayee) => {
          return <PayeeCard key={payee.id} payee={payee} />
        })}
        </div>
      </div>
    );
  }
}

export default PayeeContainer;

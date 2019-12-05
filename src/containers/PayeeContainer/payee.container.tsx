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
  
  render() {
    return (
      <div className="payee-container">
        {this.state.payees.map((payee: IPayee) => {
          return <PayeeCard key={payee.id} payee={payee} />
        })}
      </div>
    );
  }
}

export default PayeeContainer;

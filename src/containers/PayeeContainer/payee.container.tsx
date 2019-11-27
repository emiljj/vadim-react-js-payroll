import React from 'react'
import { IPayee } from '../../core/payee/payee.types'
import { testData } from './test.data';
import PayeeCard from '../../composed-components/payee/PayeeCard/payee-card.component';

interface IPayeeContainerProps {}

interface IPayeeContainerState {
  payees: IPayee[]
}

class PayeeContainer extends React.Component<IPayeeContainerProps, IPayeeContainerState> {
  state = {
    payees: testData
  }
  render() {
    const { payees } = this.state;
    return (
      <div className="payee-container">
        {payees.map((payee: IPayee) => {
          return <PayeeCard payee={payee} />
        })}
      </div>
    );
  }
}

export default PayeeContainer;

import React from 'react';
import { IPayee } from '../../../core/payee/payee.types';

interface IPayeeCardProps {
  payee: IPayee
}

const PayeeCard = (props: IPayeeCardProps) => {
  return (
    <div className="payee-card" >{props.payee.firstName}</div>
  );
}

export default PayeeCard;
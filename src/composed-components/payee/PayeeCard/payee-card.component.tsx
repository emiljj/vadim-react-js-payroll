import React from 'react';
import { IPayee } from '../../../core/payee/payee.types';

import './payee-card.style.css';

interface IPayeeCardProps {
  payee: IPayee;
}

const PayeeCard = (props: IPayeeCardProps) => {
  const { payee } = props;
  console.log('PAYEE => ', payee);
  return (
    <div className="payee-card">
      <img className="payee-card__image" src="https://fakeimg.pl/250x100/" />
      <div className="payee-card__title">
        <h1>{`${payee.firstName} ${payee.lastName}`}</h1>
      </div>
      <div className="payee-card__information">
      </div>
    </div>
  );
}

export default PayeeCard;
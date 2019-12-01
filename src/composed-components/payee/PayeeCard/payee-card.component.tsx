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
      <img className="payee-card__image"
       src="https://pickaface.net/gallery/avatar/20130828_022324_4848_Crispi.png" 
      />
      <div className="payee-card__title">
        <div className="name__title">
          <h1>{`${payee.firstName} ${payee.lastName}`}</h1> 
          <div className="job-statuse__title"> 
            <h4>{payee.jobTitle}</h4>
          </div>
        </div>
        <div className="description__title">
          <p>I like to make cool and creative designs.
          My design stash is always full of refreshing ideas.
          Feel free to take a look around my Vcard.</p>
        </div>
      </div>
      <div className="payee-card__information">
        <p>First Name: {payee.firstName}</p>
        <p>Last Name: {payee.lastName}</p>
        <p>City: {payee.city}</p>
        <p>Address: {payee.address}</p>
        <p>Social Profile: <a href={payee.socialProfileLink}>View profile</a></p>
        <p>Email: {payee.email} <a href={payee.emailAddress}>Send message</a></p>
        <p>Age: {payee.age}</p>
        {false && <button>See more</button>}
        {true && 
          <div>
            <p>Rest information here ....</p>
          </div>
        }
      </div>
    </div>
  );
}

export default PayeeCard;
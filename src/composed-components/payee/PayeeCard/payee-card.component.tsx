import React from 'react';
import { IPayee } from '../../../core/payee/payee.types';

import './payee-card.style.css';

interface IPayeeCardProps {
  payee: IPayee;
}

const getRolesList = (payee: IPayee): string => {
  const { role } = payee;
  console.log('Role => ', role);
  const result = 'ADMIN, USER, HEAD_OF_THE_DEPARTMENT';
  return result
}

const PayeeCard = (props: IPayeeCardProps) => {
  const { payee } = props;
  const [seeMore, setSeeMore] = React.useState(false);
  const onSeeMoreButtonClick = () => {
    setSeeMore(true)
  };

  const onSeeLessButtonClick = () => {
    setSeeMore(false);
  };

  return (
    <div className="payee-card">
      <img className="payee-card__image"
       src="https://fakeimg.pl/250x100/" 
      />
      <div className="payee-card__title">
        <div className="name__title">
          <h1>{`${payee.firstName} ${payee.lastName}`}</h1> 
          <div className="job-status__title"> 
            <h4>{payee.jobTitle}</h4>
          </div>
        </div>
      </div>
      <div className="payee-card__information">
        {!seeMore && <button onClick={onSeeMoreButtonClick}>See more</button>}
        {seeMore && 
          <div>
            <p><strong>First Name: </strong>{payee.firstName}</p>
            <p><strong>Last Name:</strong>{payee.lastName}</p>
            <p><strong>City:</strong>{payee.city}</p>
            <p><strong>Address:</strong>{payee.address}</p>
            <p><strong>Country:</strong>{payee.country}</p>
            <p><strong>Social Profile:</strong> <a href={payee.socialProfileLink}>View profile</a></p>
            <p><strong>Email:</strong>{payee.email} <a href={payee.emailAddress}>Send message</a></p>
            <p><strong>Age:</strong>{payee.age} </p>
            <p><strong>Roles:</strong>{getRolesList(payee)}</p>
            <p><strong>WithHoldingTax:</strong>{payee.withHoldingTax}</p>
            <p><strong>Salary:</strong>{payee.salary}</p>
            <p><strong>CardNumber:</strong>{payee.cardNumber}</p>
            <button onClick={onSeeLessButtonClick}>See less</button>
          </div>
        }
      </div>
    </div>
  );
}

export default PayeeCard;
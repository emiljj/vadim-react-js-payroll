import React from 'react';
import { IPayee } from '../../../core/payee/payee.types';

import './payee-card.style.css';

interface IPayeeCardProps {
  payee: IPayee;
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
        <p><strong>First Name: </strong>{payee.firstName}</p>
        <p>Last Name: {payee.lastName}</p>
        <p>City: {payee.city}</p>
        <p>Address: {payee.address}</p>
        {!seeMore && <button onClick={onSeeMoreButtonClick}>See more</button>}
        {seeMore && 
          <div>
            <p>Social Profile: <a href={payee.socialProfileLink}>View profile</a></p>
            <p>Email: {payee.email} <a href={payee.emailAddress}>Send message</a></p>
            <p>Age: {payee.age}</p>
            <button onClick={onSeeLessButtonClick}>See less</button>
          </div>
        }
      </div>
    </div>
  );
}

export default PayeeCard;
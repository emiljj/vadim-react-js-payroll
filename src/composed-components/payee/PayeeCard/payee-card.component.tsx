import React from 'react';
import { IPayee } from '../../../core/payee/payee.types';

import './payee-card.style.css';

interface IPayeeCardProps {
  payee: IPayee;
  isOpened: boolean;
  handleSeeMoreBtnClick: () => void;
  handleSeeLessBtnClick: () => void;
  handleDeleteBtnClick: () => void;
  handleActiveBtnClick: () => void;
  handleDeactivateBtnClick: () => void;
}

// const getRolesList = (payee: IPayee): string => {
//   const { role } = payee;
//   const result = role.join(',');
//   return result;
// };

const PayeeCard = (props: IPayeeCardProps) => {
  const {
    payee,
    isOpened,
    handleSeeMoreBtnClick,
    handleSeeLessBtnClick,
    handleDeleteBtnClick,
    handleActiveBtnClick,
    handleDeactivateBtnClick,
  } = props;

  const active = payee.active;

  return (
    <div className="payee-card">
      <img
        className="payee-card__image"
        alt=""
        src="https://fakeimg.pl/250x100/"
      />
      <div className="payee-card__title">
        <div className="name__title">
          <h3>{`${payee.firstName} ${payee.lastName}`}</h3>
          <div className="job-status__title">
            <h4>{payee.jobTitle}</h4>
          </div>
          <div
            className="payee-card_marker"
            style={{ color: active ? 'green' : 'red' }}>
            {active ? <p>Active</p> : <p>Not-Active</p>}
          </div>
        </div>
      </div>
      <div className="payee-card__link-bar">
        <a className="payee-card__link" href={`/payee/${payee._id}`}>
          View profile
        </a>
      </div>

      <div className="payee-card__buttons-bar">
        {!isOpened && <button onClick={handleSeeMoreBtnClick}>See more</button>}
        {!active && <button onClick={handleActiveBtnClick}>Activate</button>}
        {active && (
          <button onClick={handleDeactivateBtnClick}>Deactivate</button>
        )}
        <button onClick={handleDeleteBtnClick}>Delete</button>
      </div>
      {isOpened && (
        <div className="payee-card__information">
          <div className="payee-card__triangle" />
          <div className="payee-card__information-content">
            <p>
              <strong>First Name: </strong>
              {payee.firstName}
            </p>
            <p>
              <strong>Last Name:</strong>
              {payee.lastName}
            </p>
            <p>
              <strong>City:</strong>
              {payee.city}
            </p>
            <p>
              <strong>Address:</strong>
              {payee.address}
            </p>
            <p>
              <strong>Country:</strong>
              {payee.country}
            </p>
            <p>
              <strong>Social Profile:</strong>{' '}
              <a href={payee.socialProfileLink}>View profile</a>
            </p>
            <p>
              <strong>Email:</strong>
              {payee.email} <a href={payee.emailAddress}>Send message</a>
            </p>
            <p>
              <strong>Age:</strong>
              {payee.age}{' '}
            </p>
            <p>
              <strong>Roles:</strong>
              {'User'}
            </p>
            <p>
              <strong>WithHoldingTax:</strong>
              {payee.withHoldingTax}
            </p>
            <p>
              <strong>Salary:</strong>
              {payee.salary}
            </p>
            <p>
              <strong>CardNumber:</strong>
              {payee.cardNumber}
            </p>
          </div>
          <button onClick={handleSeeLessBtnClick}>See less</button>
        </div>
      )}
    </div>
  );
};

export default PayeeCard;

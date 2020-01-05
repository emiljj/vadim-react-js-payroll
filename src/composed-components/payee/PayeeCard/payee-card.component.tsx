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
  handleDeactiveBtnClick: () => void;
}

const getRolesList = (payee: IPayee): string => {
  const { role } = payee;
  const result = role.join(',');
  return result;
};

const PayeeCard = (props: IPayeeCardProps) => {
  const {
    payee,
    isOpened,
    handleSeeMoreBtnClick,
    handleSeeLessBtnClick,
    handleDeleteBtnClick,
    handleActiveBtnClick,
    handleDeactiveBtnClick,
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
      {!active && (
        <button className="button-active" onClick={handleActiveBtnClick}>
          Activate
        </button>
      )}
      {active && (
        <button className="button-deactive" onClick={handleDeactiveBtnClick}>
          Deactivate
        </button>
      )}
      <button className="button-delete" onClick={handleDeleteBtnClick}>
        Delete
      </button>
      {!isOpened && (
        <button className="button-seeMore" onClick={handleSeeMoreBtnClick}>
          See more
        </button>
      )}
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
              {getRolesList(payee)}
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

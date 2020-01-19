import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IPayee } from '../../core/payee/payee.types';

import './payee.profile.page.style.css';

const getSelector = (payeeId: string) => {
  const selector = (state: any) => {
    return state.payees.find((payee: IPayee) => {
      return +payee.id === +payeeId;
    });
  };

  return selector;
};

interface IPayeeProfilePageProps
  extends RouteComponentProps<{ payeeId: string }> {}

const PayeeProfilePage = (props: IPayeeProfilePageProps) => {
  const { payeeId } = props.match.params;
  const selector = getSelector(payeeId);
  const payee: IPayee = useSelector(selector);

  if (!payee) {
    return <div>There is not payee with this ID!!!</div>;
  }

  return (
    <div className="profile">
      <div className="profile-info">
        <div className="payee_foto">
          <img
            className="profile_foto"
            alt=""
            src="https://pickaface.net/gallery/avatar/20160317_144002_1696_manos.png"
          />
        </div>
        <div className="profile_info_name">
          <h2>
            {payee.firstName} {payee.lastName}
          </h2>
          <h4>HEAD OF THE DEPARTMENT</h4>
        </div>
        <div className="profile_info_massage">
          <div className="massage">
            <p>Send massage:{payee.email}</p>
          </div>
        </div>
      </div>
      <div className="profile-skills">
        <div className="core_skills">
          <p>My core skills:</p>
        </div>
        <div className="skills">
          <p>INBOUNT MARKETING</p>
        </div>
        <div className="skills">
          <p>ENTREPRENEURSHIP</p>
        </div>
        <div className="skills">
          <p>GROWTH MARKETING</p>
        </div>
      </div>
      <div className="payee-information">
        <div className="payee-information_left_column">
          <h3>User information</h3>
          <p>County: {payee.country}</p>
          <p>City: {payee.city}</p>
          <p>Address: {payee.address}</p>
          <p>Social Profile: {payee.socialProfileLink}</p>
          <p>Email: {payee.email}</p>
        </div>
        <div className="payee-information_right_column">
          <p>Age: {payee.age}</p>
          <p>Role: {payee.role}</p>
          <p>With Holding Tax: {payee.withHoldingTax}</p>
          <p>Salary: {payee.salary}</p>
          <p>Card Number: {payee.cardNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default PayeeProfilePage;

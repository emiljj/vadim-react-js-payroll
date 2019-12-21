import React from 'react';

import './payee-form.style.css';

interface IPayeeFormProps {
  onClose: () => void;
  onSave: () => void;
}

const PayeeForm = ({ onClose, onSave }: IPayeeFormProps) => {
  return (
    <div>
      <div className="payee-form">
        <div className="one">
          <label htmlFor="firstName" className="label">
            First Name
          </label>
          <input
            className="input"
            type="text"
            id="firstName"
            placeholder="Enter name"
          />

          <label htmlFor="lastName" className="label">
            Last Name
          </label>
          <input
            className="input"
            type="text"
            id="lastName"
            placeholder="Enter last name"
          />

          <label htmlFor="jobTitle" className="label">
            Job Title
          </label>
          <input
            className="input"
            type="text"
            id="jobTitle"
            placeholder="Enter job title"
          />

          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            className="input"
            type="text"
            id="email"
            placeholder="Enter email"
          />

          <label htmlFor="address" className="label">
            Address
          </label>
          <input
            className="input"
            type="text"
            id="address"
            placeholder="Enter address"
          />

          <label htmlFor="age" className="label">
            Age
          </label>
          <input
            className="input"
            type="text"
            id="age"
            placeholder="Enter age"
          />
        </div>

        <div className="two">
          <label htmlFor="withHoldingTax" className="label">
            With Holding Tax
          </label>
          <input
            className="input"
            type="text"
            id="withHoldingTax"
            placeholder="Enter with holding tax"
          />

          <label htmlFor="salary" className="label">
            Salary
          </label>
          <input
            className="input"
            type="text"
            id="salary"
            placeholder="Enter salary"
          />

          <label htmlFor="country" className="label">
            Country
          </label>
          <input
            className="input"
            type="text"
            id="country"
            placeholder="Enter country"
          />

          <label htmlFor="city" className="label">
            City
          </label>
          <input
            className="input"
            type="text"
            id="city"
            placeholder="Enter city"
          />

          <label htmlFor="socialProfileLink" className="label">
            Social Profile Link
          </label>
          <input
            className="input"
            type="text"
            id="socialProfileLink"
            placeholder="Enter social profile link"
          />

          <label htmlFor="cardNumber" className="label">
            Card Number
          </label>
          <input
            className="input"
            type="text"
            id="cardNumber"
            placeholder="Enter card number"
          />
        </div>
      </div>
      <button className="payee-form-cansel" onClick={() => {}}>
        Cancel
      </button>
      <button className="payee-form-save" onClick={() => {}}>
        Save
      </button>
    </div>
  );
};

export default PayeeForm;

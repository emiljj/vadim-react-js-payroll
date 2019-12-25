import React from 'react';

import './payee-form.style.css';

interface IPayeeFormProps {
  onClose: (isOpened: any) => void;
  onSave: (data: any) => void;
}

interface IPayeeFormState {}

const formFields = {
  firstName: 'firstName',
  lastName: 'lastName',
  jobTitle: 'jobTitle',
  email: 'email',
  address: 'address',
  age: 'age',
  withHoldingTax: 'withHoldingTax',
  salary: 'salary',
  country: 'country',
  city: 'city',
  socialProfileLink: 'socialProfileLink',
  cardNumber: 'cardNumber',
};

class PayeeForm extends React.Component<IPayeeFormProps, IPayeeFormState> {
  state = {
    [formFields.firstName]: '',
    [formFields.lastName]: '',
    [formFields.jobTitle]: '',
    [formFields.email]: '',
    [formFields.address]: '',
    [formFields.age]: 18,
    [formFields.withHoldingTax]: 0,
    [formFields.salary]: 0,
    [formFields.country]: '',
    [formFields.city]: '',
    [formFields.socialProfileLink]: '',
    [formFields.cardNumber]: 0,
  };

  onChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: string | number = e.target.value;

    if (e.target.type === 'number') {
      value = +e.target.value;
    }

    this.setState({
      [field]: value,
    });
  };

  render() {
    const { onSave } = this.props;
    const { onClose } = this.props;
    return (
      <div>
        <div className="payee-form">
          <div className="columnLeft">
            <label htmlFor={formFields.firstName} className="label">
              First Name
            </label>
            <input
              className="input"
              type="text"
              onChange={this.onChange(formFields.firstName)}
              value={this.state[formFields.firstName]}
              id={formFields.firstName}
              placeholder="Enter name"
            />
            <label htmlFor={formFields.lastName} className="label">
              Last Name
            </label>
            <input
              className="input"
              type="text"
              onChange={this.onChange(formFields.lastName)}
              id={formFields.lastName}
              placeholder="Enter last name"
            />

            <label htmlFor={formFields.jobTitle} className="label">
              Job Title
            </label>
            <input
              className="input"
              type="text"
              onChange={this.onChange(formFields.jobTitle)}
              id={formFields.jobTitle}
              placeholder="Enter job title"
            />

            <label htmlFor={formFields.email} className="label">
              Email
            </label>
            <input
              className="input"
              type="text"
              onChange={this.onChange(formFields.email)}
              id={formFields.email}
              placeholder="Enter email"
            />

            <label htmlFor={formFields.address} className="label">
              Address
            </label>
            <input
              className="input"
              type="text"
              onChange={this.onChange(formFields.address)}
              id={formFields.address}
              placeholder="Enter address"
            />

            <label htmlFor={formFields.age} className="label">
              Age
            </label>
            <input
              className="input"
              type="number"
              onChange={this.onChange(formFields.age)}
              id={formFields.age}
              placeholder="Enter age"
            />
          </div>

          <div className="columnRight">
            <label htmlFor={formFields.withHoldingTax} className="label">
              With Holding Tax
            </label>
            <input
              className="input"
              type="number"
              onChange={this.onChange(formFields.withHoldingTax)}
              id={formFields.withHoldingTax}
              placeholder="Enter with holding tax"
            />

            <label htmlFor={formFields.salary} className="label">
              Salary
            </label>
            <input
              className="input"
              type="number"
              onChange={this.onChange(formFields.salary)}
              id={formFields.salary}
              placeholder="Enter salary"
            />

            <label htmlFor={formFields.country} className="label">
              Country
            </label>
            <input
              className="input"
              type="text"
              onChange={this.onChange(formFields.country)}
              id={formFields.country}
              placeholder="Enter country"
            />

            <label htmlFor={formFields.city} className="label">
              City
            </label>
            <input
              className="input"
              type="text"
              onChange={this.onChange(formFields.city)}
              id={formFields.city}
              placeholder="Enter city"
            />

            <label htmlFor={formFields.socialProfileLink} className="label">
              Social Profile Link
            </label>
            <input
              className="input"
              type="text"
              onChange={this.onChange(formFields.socialProfileLink)}
              id={formFields.socialProfileLink}
              placeholder="Enter social profile link"
            />

            <label htmlFor={formFields.cardNumber} className="label">
              Card Number
            </label>
            <input
              className="input"
              type="number"
              onChange={this.onChange(formFields.cardNumber)}
              id={formFields.cardNumber}
              placeholder="Enter card number"
            />
          </div>
        </div>
        <button
          className="payee-form-cansel"
          onClick={() => onClose(this.state)}>
          Cancel
        </button>
        <button className="payee-form-save" onClick={() => onSave(this.state)}>
          Save
        </button>
      </div>
    );
  }
}

export default PayeeForm;

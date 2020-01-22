import React from 'react';

import './payee-form.style.css';

interface IValues {
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  address: string;
  age: number;
  withHoldingTax: number;
  salary: number;
  country: string;
  city: string;
  socialProfileLink: string;
  cardNumber: string;
}

const testErrors = [
  { fieldName: 'Test1', message: 'Test is a required' },
  { fieldName: 'Test2', message: 'Test is a required' },
  { fieldName: 'Test3', message: 'Test is a required' },
];

interface IPayeeFormProps {
  onClose: (isOpened: any) => void;
  onSave: (data: any) => void;
  initialValues?: { [key: string]: string | number };
}

interface IFormError {
  fieldName: string;
  message: string;
}

interface IPayeeFormState {
  values: IValues;
  errors: IFormError[];
}

export const payeeFormFields = {
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

class PayeeForm extends React.Component<IPayeeFormProps, any> {
  constructor(props: IPayeeFormProps) {
    super(props);

    if (props.initialValues) {
      this.state = {
        values: props.initialValues,
        errors: [],
      };
    } else {
      this.state = {
        values: {
          [payeeFormFields.firstName]: '',
          [payeeFormFields.lastName]: '',
          [payeeFormFields.jobTitle]: '',
          [payeeFormFields.email]: '',
          [payeeFormFields.address]: '',
          [payeeFormFields.age]: 18,
          [payeeFormFields.withHoldingTax]: 0,
          [payeeFormFields.salary]: 0,
          [payeeFormFields.country]: '',
          [payeeFormFields.city]: '',
          [payeeFormFields.socialProfileLink]: '',
          [payeeFormFields.cardNumber]: '',
        },
        errors: [],
      };
    }
  }

  onChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: string | number = e.target.value;

    if (e.target.type === 'number') {
      value = +e.target.value;
    }

    this.setState({
      [field]: value,
    });
  };

  payeeFormValidator = (): IFormError[] => {
    const errors = [];
    const { values } = this.state;
    // TODO: logic with validation and put errors to errors[] array then return this array

    return [];
  };

  onSaveButtonClick = () => {
    const { onSave } = this.props;
    const errors = this.payeeFormValidator();
    onSave(this.state.values);
  };

  render() {
    const { onClose } = this.props;
    return (
      <div>
        <div className="create-payee-form-container">
          <div className="create-payee-form">
            <div className="columnLeft">
              <label htmlFor={payeeFormFields.firstName} className="label">
                First Name
              </label>
              <input
                className="input"
                type="text"
                onChange={this.onChange(payeeFormFields.firstName)}
                // TODO: Change everywhere where needed this.state.values[payeeFormFields.firstName]
                value={this.state.values[payeeFormFields.firstName]}
                id={payeeFormFields.firstName}
                placeholder="Enter name"
              />
              <label htmlFor={payeeFormFields.lastName} className="label">
                Last Name
              </label>
              <input
                className="input"
                type="text"
                onChange={this.onChange(payeeFormFields.lastName)}
                value={this.state[payeeFormFields.lastName]}
                id={payeeFormFields.lastName}
                placeholder="Enter last name"
              />

              <label htmlFor={payeeFormFields.jobTitle} className="label">
                Job Title
              </label>
              <input
                className="input"
                type="text"
                onChange={this.onChange(payeeFormFields.jobTitle)}
                id={payeeFormFields.jobTitle}
                placeholder="Enter job title"
                value={this.state[payeeFormFields.jobTitle]}
              />

              <label htmlFor={payeeFormFields.email} className="label">
                Email
              </label>
              <input
                className="input"
                type="text"
                onChange={this.onChange(payeeFormFields.email)}
                id={payeeFormFields.email}
                value={this.state[payeeFormFields.email]}
                placeholder="Enter email"
              />

              <label htmlFor={payeeFormFields.address} className="label">
                Address
              </label>
              <input
                className="input"
                type="text"
                onChange={this.onChange(payeeFormFields.address)}
                id={payeeFormFields.address}
                value={this.state[payeeFormFields.address]}
                placeholder="Enter address"
              />

              <label htmlFor={payeeFormFields.age} className="label">
                Age
              </label>
              <input
                className="input"
                type="number"
                onChange={this.onChange(payeeFormFields.age)}
                id={payeeFormFields.age}
                value={this.state[payeeFormFields.age]}
                placeholder="Enter age"
              />
            </div>

            <div className="columnRight">
              <label htmlFor={payeeFormFields.withHoldingTax} className="label">
                With Holding Tax
              </label>
              <input
                className="input"
                type="number"
                onChange={this.onChange(payeeFormFields.withHoldingTax)}
                id={payeeFormFields.withHoldingTax}
                value={this.state[payeeFormFields.withHoldingTax]}
                placeholder="Enter with holding tax"
              />

              <label htmlFor={payeeFormFields.salary} className="label">
                Salary
              </label>
              <input
                className="input"
                type="number"
                onChange={this.onChange(payeeFormFields.salary)}
                value={this.state[payeeFormFields.salary]}
                id={payeeFormFields.salary}
                placeholder="Enter salary"
              />

              <label htmlFor={payeeFormFields.country} className="label">
                Country
              </label>
              <input
                className="input"
                type="text"
                value={this.state[payeeFormFields.country]}
                onChange={this.onChange(payeeFormFields.country)}
                id={payeeFormFields.country}
                placeholder="Enter country"
              />

              <label htmlFor={payeeFormFields.city} className="label">
                City
              </label>
              <input
                className="input"
                type="text"
                onChange={this.onChange(payeeFormFields.city)}
                value={this.state[payeeFormFields.city]}
                id={payeeFormFields.city}
                placeholder="Enter city"
              />

              <label
                htmlFor={payeeFormFields.socialProfileLink}
                className="label">
                Social Profile Link
              </label>
              <input
                className="input"
                type="text"
                onChange={this.onChange(payeeFormFields.socialProfileLink)}
                id={payeeFormFields.socialProfileLink}
                value={this.state[payeeFormFields.socialProfileLink]}
                placeholder="Enter social profile link"
              />

              <label htmlFor={payeeFormFields.cardNumber} className="label">
                Card Number
              </label>
              <input
                className="input"
                type="text"
                onChange={this.onChange(payeeFormFields.cardNumber)}
                id={payeeFormFields.cardNumber}
                value={this.state[payeeFormFields.cardNumber]}
                placeholder="Enter card number"
              />
            </div>
          </div>
        </div>
        <div className="errors">
          {testErrors.map((error: any) => {
            return <p>{`${error.fieldName}: ${error.message}`}</p>;
          })}
        </div>
        <div className="button-container">
          <div className="button-bar">
            <button
              className="payee-form-cancel"
              onClick={() => onClose(this.state)}>
              Cancel
            </button>
            <button
              className="payee-form-save"
              onClick={this.onSaveButtonClick}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PayeeForm;

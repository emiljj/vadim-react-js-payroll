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

interface IPayeeFormProps {
  onClose: (isOpened: any) => void;
  onSave: (data: any) => void;
  initialValues?: { [key: string]: string | number };
}

interface IFormError {
  fieldName: string;
  message: string;
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
    const { values } = this.state;
    let value: string | number = e.target.value;

    if (e.target.type === 'number') {
      value = +e.target.value;
    }

    this.setState({
      values: {
        ...values,
        [field]: value,
      },
    });
  };

  payeeFormValidator = (): IFormError[] => {
    const errors = [];
    const { values } = this.state;
    if (!values.firstName) {
      errors.push({
        fieldName: 'First Name',
        message: 'is a required field',
      });
    } else if (!values.lastName) {
      errors.push({
        fieldName: 'Last Name',
        message: 'is a required field',
      });
    } else if (!values.jobTitle) {
      errors.push({
        fieldName: 'Job Title',
        message: 'is a required field',
      });
    } else if (!values.email) {
      errors.push({
        fieldName: 'Email',
        message: 'is a required field',
      });
    } else if (!values.address) {
      errors.push({
        fieldName: 'Address',
        message: 'is a required field',
      });
    } else if (!values.age) {
      errors.push({
        fieldName: 'Age',
        message: 'is a required field',
      });
    } else if (!values.withHoldingTax) {
      errors.push({
        fieldName: 'With Holding Tax',
        message: 'is a required field',
      });
    } else if (!values.salary) {
      errors.push({
        fieldName: 'Salary',
        message: 'is a required field',
      });
    } else if (!values.country) {
      errors.push({
        fieldName: 'Country',
        message: 'is a required field',
      });
    } else if (!values.city) {
      errors.push({
        fieldName: 'City',
        message: 'is a required field',
      });
    } else if (!values.socialProfileLink) {
      errors.push({
        fieldName: 'Social Profile Link',
        message: 'is a required field',
      });
    } else if (!values.cardNumber) {
      errors.push({
        fieldName: 'Card Number',
        message: 'is a required field',
      });
    }
    // TODO: logic with validation and put errors to errors[] array then return this array

    return errors;
  };

  onSaveButtonClick = () => {
    const { onSave } = this.props;
    const errors = this.payeeFormValidator();

    if (errors.length) {
      this.setState({ errors });
      return;
    }
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
                value={this.state.values[payeeFormFields.lastName]}
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
                value={this.state.values[payeeFormFields.jobTitle]}
              />

              <label htmlFor={payeeFormFields.email} className="label">
                Email
              </label>
              <input
                className="input"
                type="text"
                onChange={this.onChange(payeeFormFields.email)}
                id={payeeFormFields.email}
                value={this.state.values[payeeFormFields.email]}
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
                value={this.state.values[payeeFormFields.address]}
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
                value={this.state.values[payeeFormFields.age]}
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
                value={this.state.values[payeeFormFields.withHoldingTax]}
                placeholder="Enter with holding tax"
              />

              <label htmlFor={payeeFormFields.salary} className="label">
                Salary
              </label>
              <input
                className="input"
                type="number"
                onChange={this.onChange(payeeFormFields.salary)}
                value={this.state.values[payeeFormFields.salary]}
                id={payeeFormFields.salary}
                placeholder="Enter salary"
              />

              <label htmlFor={payeeFormFields.country} className="label">
                Country
              </label>
              <input
                className="input"
                type="text"
                value={this.state.values[payeeFormFields.country]}
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
                value={this.state.values[payeeFormFields.city]}
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
                value={this.state.values[payeeFormFields.socialProfileLink]}
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
                value={this.state.values[payeeFormFields.cardNumber]}
                placeholder="Enter card number"
              />
            </div>
          </div>
        </div>
        <div className="errors-bar">
          <div className="errors">
            {this.state.errors.map((error: any) => {
              return (
                <p
                  key={
                    error.fieldName
                  }>{`${error.fieldName}: ${error.message}`}</p>
              );
            })}
          </div>
        </div>
        <div className="button-container">
          <div className="button-bar">
            <button
              className="payee-form-cancel"
              onClick={() => onClose(this.state.values)}>
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

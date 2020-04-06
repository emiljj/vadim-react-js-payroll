import React from 'react';
import { connect } from 'react-redux';
import { successLoginAction } from '../../core/actions';
import { ActionCreator, AnyAction } from 'redux';
import { ICompany } from '../../core/payee/payee.types';
import './login.style.css';

interface IValues {
  companyID: string;
  password: string;
}

export const loginFormFields = {
  companyID: 'companyID',
  password: 'password',
};

interface IPaymentFormProps {
  company: ICompany[];
  successLogin: ActionCreator<AnyAction>;
  loginButtonSave: (data: any) => void;
  initialValues?: { [key: string]: string | number };
}

class LoginPage extends React.Component<IPaymentFormProps, any> {
  constructor(props: IPaymentFormProps) {
    super(props);

    if (props.initialValues) {
      this.state = {
        values: props.initialValues,
      };
    } else {
      this.state = {
        values: {
          [loginFormFields.companyID]: '',
          [loginFormFields.password]: '',
        },
      };
    }
  }

  onChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { values } = this.state;
    console.log(values);
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

  loginButtonSave = () => {
    const data = {
      companyID: this.state.values.companyID,
      password: this.state.values.password,
    };
    console.log('dadadad', data);

    fetch(`http://localhost:3001/company/login-admin`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => {
        if (result) {
          console.log('POST RESULT=>>', { result });
        }
      });
  };

  render() {
    return (
      <div className="body">
        <div className="main-holder">
          <h1 className="login-header">Login</h1>

          <div className="login-error-msg-holder">
            <p className="login-error-msg">
              Invalid username
              <span className="error-msg-second-line">and/or password</span>
            </p>
          </div>

          <form className="login-form">
            <input
              type="text"
              name="Company ID"
              onChange={this.onChange(loginFormFields.companyID)}
              value={this.state.values[loginFormFields.companyID]}
              id={loginFormFields.companyID}
              className="login-form-field"
              placeholder="Company ID"
            />

            <input
              type="password"
              name="Password"
              onChange={this.onChange(loginFormFields.password)}
              value={this.state.values[loginFormFields.password]}
              id={loginFormFields.password}
              className="login-form-field"
              placeholder="Password"
            />
            <button
              value="Login"
              className="login-form-submit"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                this.loginButtonSave();
              }}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    company: state.company,
  };
};

const dispatchToProps = {
  successLogin: successLoginAction,
};

export default connect(mapStateToProps, dispatchToProps)(LoginPage);

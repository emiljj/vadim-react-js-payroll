import React from 'react';
import { connect } from 'react-redux';
import { successLoginAction } from '../../core/actions';
import { ActionCreator, AnyAction } from 'redux';
import { push, Push } from 'connected-react-router';
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
  redirectTo: Push;
  loginButtonSave: (data: any) => void;
  initialValues?: { [key: string]: string | number };
}

class LoginPage extends React.Component<IPaymentFormProps, any> {
  constructor(props: IPaymentFormProps) {
    super(props);
    this.state = {
      errorMassage: '',
      values: {
        [loginFormFields.companyID]: '',
        [loginFormFields.password]: '',
      },
    };
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

  loginButtonSave = () => {
    const data = {
      companyId: this.state.values.companyID,
      password: this.state.values.password,
    };

    fetch(`http://localhost:3001/company/login-admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then((result: any) => {
        if (result.error) {
          this.setState({ errorMassage: result.error });
        } else {
          const { token, company } = result;
          localStorage.setItem('token', JSON.stringify(token));
          localStorage.setItem('company', JSON.stringify(company));
          this.props.redirectTo('/payees');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    const { errorMassage } = this.state;
    return (
      <div className="body">
        <div className="main-holder">
          <h1 className="login-header">Login</h1>

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
            {errorMassage && <div className="errorMassage">{errorMassage}</div>}
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

const dispatchToProps = {
  successLogin: successLoginAction,
  redirectTo: push,
};

export default connect(null, dispatchToProps)(LoginPage);

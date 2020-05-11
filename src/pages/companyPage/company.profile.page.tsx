import React from 'react';
import { connect } from 'react-redux';
import { ICompany } from '../../core/payee/payee.types';
import './company.profile.style.css';
import Layout from '../../../src/components/Layout/layout';

interface ICompanyPageProps {
  companyBalance: number;
  companyAddress: string;
  companyPhone: number;
  companyEmail: string;
  companyCountOfPayees: number;
  companyName: string;
  companyPassword: number;
  company: ICompany[];
}

class Company extends React.Component<ICompanyPageProps> {
  render() {
    const {
      companyBalance,
      companyAddress,
      companyPhone,
      companyCountOfPayees,
      companyName,
      companyPassword,
      companyEmail,
    } = this.props;
    return (
      <Layout>
        <div className="main">
          <div className="company-info">
            <div className="company__name">
              <div className="one">
                <p>Kulmukhametov</p>
              </div>
              <div className="two">
                <p>Trotsenko</p>
              </div>
              <div className="three">
                <p>IT COMPANY</p>
              </div>
            </div>
            <div>
              <img
                className="company_photo"
                alt=""
                src="https://news.itmo.ru/images/news/big/682100.jpg"
              />
            </div>
          </div>
          <div className="company-form">
            <div className="company-form-left">
              <h3>Information</h3>
              <p>Balance: {companyBalance}</p>
              <p>Address: {companyAddress}</p>
              <p>Phone: {companyPhone}</p>
            </div>
            <div>
              <div className="company-form-right">
                <p>Count of Payees: {companyCountOfPayees}</p>
                <p>Name: {companyName}</p>
                <p>Password: {companyPassword}</p>
                <p>Email: {companyEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    companyBalance: state.company.balance,
    companyAddress: state.company.address,
    companyPhone: state.company.phone,
    companyEmail: state.company.email,
    companyCountOfPayees: state.company.countOfPayees,
    companyName: state.company.address,
    companyPassword: state.company.password,
  };
};

export default connect(mapStateToProps)(Company);

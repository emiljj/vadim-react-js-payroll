import React from 'react';
import PayeesPage from './pages/PayeesPage/payees.page';
import StatisticsPage from './pages/StatisticsPage/statistics.page';
import ProfilePage from './pages/ProfilePage/profile.page';
import HomePage from './pages/HomePage/home.page';
import {
  Route,
  BrowserRouter,
  NavLink,
  RouteComponentProps,
} from 'react-router-dom';

import './app.style.css';
import { useSelector } from 'react-redux';
import { IPayee } from './core/payee/payee.types';

const Header = () => {
  return (
    <div className="header">
      <div className="header__links">
        <NavLink className="header_link" to="/">
          Payroll
        </NavLink>
        <NavLink className="header_link" to="/payees">
          Payees
        </NavLink>
        <NavLink className="header_link" to="/statistics">
          Statistics
        </NavLink>
        <NavLink className="header_link" to="/profile">
          Your profile
        </NavLink>
      </div>
    </div>
  );
};

// ******* ////
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
    <div>
      <p>
        Payee Name: {payee.firstName} {payee.lastName}
      </p>
    </div>
  );
};

// ******* ////

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/payees" component={PayeesPage} />
        <Route exact path="/statistics" component={StatisticsPage} />
        <Route exact path="/admin-profile" component={ProfilePage} />
        <Route exact path="/payee/:payeeId" component={PayeeProfilePage} />
      </BrowserRouter>
    </div>
  );
};

export default App;

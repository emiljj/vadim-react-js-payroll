import React from 'react';
import { withRouter } from 'react-router-dom';
import PayeesPage from './pages/PayeesPage/payees.page';
import StatisticsPage from './pages/StatisticsPage/statistics.page';
import ProfilePage from './pages/ProfilePage/profile.page';
import HomePage from './pages/HomePage/home.page';
import LoginPage from './pages/LoginPage/login.page';
import PaymentsPage from './pages/PaymentPage/payments.page';
import Header from './components/Header/header';
import PayeeProfilePage from './pages/PayeeProfilePage/payee.profile.page';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/private-route';

import './app.style.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Route exact path="/login" component={LoginPage} />
      <PrivateRoute exact path="/" protectedComponent={HomePage} />
      <PrivateRoute exact path="/payees" protectedComponent={PayeesPage} />
      <PrivateRoute
        exact
        path="/statistics"
        protectedComponent={StatisticsPage}
      />
      <PrivateRoute
        exact
        path="/admin-profile"
        protectedComponent={ProfilePage}
      />
      <PrivateRoute exact path="/payments" protectedComponent={PaymentsPage} />
      <PrivateRoute
        exact
        path="/payee/:payeeId"
        protectedComponent={PayeeProfilePage}
      />
    </div>
  );
};

export default withRouter(App);

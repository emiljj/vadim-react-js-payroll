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
      <PrivateRoute exact path="/" ProtectedComponent={HomePage} />
      <PrivateRoute exact path="/payees" ProtectedComponent={PayeesPage} />
      <PrivateRoute
        exact
        path="/statistics"
        ProtectedComponent={StatisticsPage}
      />
      <PrivateRoute
        exact
        path="/admin-profile"
        ProtectedComponent={ProfilePage}
      />
      <PrivateRoute
        exact
        path="/payee/:payeeId"
        ProtectedComponent={PayeeProfilePage}
      />
      <PrivateRoute exact path="/payments" ProtectedComponent={PaymentsPage} />
    </div>
  );
};

export default withRouter(App);

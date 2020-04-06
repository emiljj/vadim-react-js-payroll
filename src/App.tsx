import React from 'react';
import PayeesPage from './pages/PayeesPage/payees.page';
import StatisticsPage from './pages/StatisticsPage/statistics.page';
import ProfilePage from './pages/ProfilePage/profile.page';
import HomePage from './pages/HomePage/home.page';
import LoginPage from './pages/LoginPage/login.page';
import PaymentsPage from './pages/PaymentPage/payments.page';
import Header from './components/Header/header';
import PayeeProfilePage from './pages/PayeeProfilePage/payee.profile.page';
import { Route, BrowserRouter } from 'react-router-dom';

import './app.style.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/payees" component={PayeesPage} />
        <Route exact path="/statistics" component={StatisticsPage} />
        <Route exact path="/admin-profile" component={ProfilePage} />
        <Route exact path="/payments" component={PaymentsPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/payee/:payeeId" component={PayeeProfilePage} />
      </BrowserRouter>
    </div>
  );
};

export default App;

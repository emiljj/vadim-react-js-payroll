import React from 'react';
import PayeesPage from './pages/PayeesPage/payees.page';
import StatisticsPage from './pages/StatisticsPage/statistics.page';
import ProfilePage from './pages/ProfilePage/profile.page';
import HomePage from './pages/HomePage/home.page';
import './app.style.css';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
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
        Profile
      </NavLink>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/payees" component={PayeesPage} />
        <Route exact path="/statistics" component={StatisticsPage} />
        <Route exact path="/profile" component={ProfilePage} />
      </BrowserRouter>
    </div>
  );
};

export default App;

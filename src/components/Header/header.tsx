import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.style.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__links">
        <NavLink className="header_link_payroll" to="/">
          Payroll
        </NavLink>
        <NavLink className="header_link" to="/payees">
          Payees
        </NavLink>
        <NavLink className="header_link" to="/statistics">
          Statistics
        </NavLink>
        <NavLink className="header_link" to="/admin-profile">
          Your profile
        </NavLink>
        <NavLink className="header_link" to="/payments">
          Payments
        </NavLink>
      </div>
    </div>
  );
};

export default Header;

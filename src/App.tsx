import React from 'react';
import PayeesPage from './pages/PayeesPage/payees.page';
import { Route, BrowserRouter } from 'react-router-dom';

const StatisticsPage = () => {
  return <div>Statistics</div>;
};

const ProfilePage = () => {
  return <div>Profile</div>;
};

const HomePage = () => {
  return <div>Home page</div>;
};

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/payees" component={PayeesPage} />
        <Route exact path="/statistics" component={StatisticsPage} />
        <Route exact path="/profile" component={ProfilePage} />
      </BrowserRouter>
    </div>
  );
};

export default App;

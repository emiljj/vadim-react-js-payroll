import React from 'react';
import PayeesContainer from './containers/PayeesContainer/payees.container';
import { Route, BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Route path="/payees" component={PayeesContainer} />
      </BrowserRouter>
    </div>
  );
};

export default App;

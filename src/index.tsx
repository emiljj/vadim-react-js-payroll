import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './core/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from './core/utils/history';

const store = configureStore();

const WrappedWithProvider = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(WrappedWithProvider, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

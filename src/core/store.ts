import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import reducer from './reducer';
import history from './utils/history';

export default function configureStore(initialState = {}) {
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );
  return store;
}

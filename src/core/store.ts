import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

export default function configureStore(initialState = {}) {
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(reducer, initialState, composeEnhancers());
  return store;
}

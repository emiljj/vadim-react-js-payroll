import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

function testReducer(state = 0, action: any) {
  console.log('action', action);
  switch (action.type) {
    case 'INCREMENT':
      return state + (action.payload || 1);
    case 'DECREMENT':
      return state - (action.payload || 1);
    default:
      return state;
  }
}

export default function configureStore(initialState = 0) {
  const composeEnhancers = composeWithDevTools({});

  const store = createStore(testReducer, initialState, composeEnhancers());

  return store;
}

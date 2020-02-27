import { combineReducers, AnyAction } from 'redux';
import { CREATE_PAYEE, UPDATE_PAYEE } from './constants';
import { DELETE_PAYEE } from './constants';
import { ACTIVE_PAYEE } from './constants';
import { DEACTIVATE_PAYEE } from './constants';
import { PAY_PAYEE } from './constants';
import { GET_PAYEES_SUCCESS } from './constants';
import { GET_PAYEE_PROFILE_SUCCESS } from './constants';
import { IPayee } from './payee/payee.types';

const setActive = (list: IPayee[], id: string, active: boolean) => {
  const newList = [...list];
  const index = list.findIndex(element => element._id === id);
  list.splice(index, 1, Object.assign(newList[index], { active }));
  return newList;
};

const payees = (state: IPayee[] = [], action: AnyAction) => {
  if (action.type === CREATE_PAYEE) {
    return [...state, action.payload];
  } else if (action.type === DELETE_PAYEE) {
    return state.filter(item => item._id !== action.payload);
  } else if (action.type === ACTIVE_PAYEE) {
    const list = setActive(state, action.payload, true);
    return list;
  } else if (action.type === DEACTIVATE_PAYEE) {
    const list = setActive(state, action.payload, false);
    return list;
  } else if (action.type === UPDATE_PAYEE) {
    const list = [...state];
    const payload = action.payload;
    const payeeIndex = list.findIndex(
      element => element._id === payload.payeeId
    );
    const payeeData = list[payeeIndex];
    const updatedData = Object.assign(payeeData, payload.data);
    list[payeeIndex] = updatedData;
    return list;
  } else if (action.type === GET_PAYEES_SUCCESS) {
    return action.payload;
  } else if (action.type === GET_PAYEE_PROFILE_SUCCESS) {
    return [action.payload];
  }
  return state;
};

const companyBalance = (state = 2500, action: AnyAction) => {
  if (action.type === PAY_PAYEE) {
    let balance = state;
    balance = balance - action.payload;
    return balance;
  }
  return state;
};

export default combineReducers({
  payees,
  companyBalance,
});

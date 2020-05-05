import { combineReducers, AnyAction } from 'redux';
import {
  GET_PAYEES_SUCCESS,
  PAYMENT_PAYEE,
  DEACTIVATE_PAYEE,
  ACTIVE_PAYEE,
  DELETE_PAYEE,
  CREATE_PAYEE,
  UPDATE_PAYEE,
  GET_PAYMENTS,
  GET_PAYEE_PROFILE_SUCCESS,
  LOGIN_SUCCESS,
} from './constants';
import { IPayee, IPayments } from './payee/payee.types';
import { connectRouter } from 'connected-react-router';
import history from '../core/utils/history';

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
    const list = setActive(state, action.payload._id, true);
    return list;
  } else if (action.type === DEACTIVATE_PAYEE) {
    const list = setActive(state, action.payload._id, false);
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

const payments = (state: IPayments[] = [], action: AnyAction) => {
  if (action.type === GET_PAYMENTS) {
    return action.payload;
  }
  return state;
};

const company = (_: any, action: AnyAction) => {
  let state = null;
  const savedCompany = localStorage.getItem('company');
  if (savedCompany) {
    state = JSON.parse(savedCompany);
  }
  if (action.type === LOGIN_SUCCESS) {
    return action.payload;
  }
  if (action.type === PAYMENT_PAYEE) {
    state = action.payload;
  }
  return state;
};

export default combineReducers({
  payees,
  payments,
  company,
  router: connectRouter(history),
});

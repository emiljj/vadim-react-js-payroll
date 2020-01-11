import { combineReducers, AnyAction } from 'redux';
import { CREATE_PAYEE } from './constants';
import { DELETE_PAYEE } from './constants';
import { ACTIVE_PAYEE } from './constants';
import { DEACTIVATE_PAYEE } from './constants';
import { IPayee } from './payee/payee.types';

const initialState = [
  {
    id: 2,
    firstName: 'Emil',
    lastName: 'Kulmuhametov',
    jobTitle: 'HOJSD',
    email: 'emilkul@gmail.com',
    emailAddress: 'https://mail.google.com/',
    address: 'Kooperativnaya 6a',
    age: 23,
    role: ['ADMIN', 'USER', 'HEAD_OF_THE_DEPARTMENT'],
    withHoldingTax: 0.5,
    salary: 750,
    country: 'UA',
    city: 'Kharkiv',
    socialProfileLink: 'https://vk.com/id170185455',
    cardNumber: '1232123412447722',
    active: false,
  },
];

const setActive = (list: IPayee[], id: number, active: boolean) => {
  const newlist = [...list];
  const index = list.findIndex(element => element.id === id);
  list.splice(index, 1, Object.assign(newlist[index], { active }));
  return newlist;
};

const payees = (state = initialState, action: AnyAction) => {
  if (action.type === CREATE_PAYEE) {
    return [...state, action.payload];
  } else if (action.type === DELETE_PAYEE) {
    return state.filter(item => item.id !== action.payload);
  } else if (action.type === ACTIVE_PAYEE) {
    const list = setActive(state, action.payload, true);
    return list;
  } else if (action.type === DEACTIVATE_PAYEE) {
    const list = setActive(state, action.payload, false);
    return list;
  }
  return state;
};

const companyBalance = (state = 500000, action: AnyAction) => {
  if (action.type === 'PAY_PAYEE') {
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

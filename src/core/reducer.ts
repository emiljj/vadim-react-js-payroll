import { combineReducers, AnyAction } from 'redux';
import { CREATE_PAYEE } from './constants';

const initialState = [
  {
    id: 2,
    firstName: 'Emilio',
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
  },
];

const payees = (state = initialState, action: AnyAction) => {
  if (action.type === CREATE_PAYEE) {
    return [...state, action.payload];
  }
  return state;
};

export default combineReducers({
  payees,
});

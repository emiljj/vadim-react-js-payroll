import { CREATE_PAYEE } from './constants';
import { DELETE_PAYEE } from './constants';

export const createPayeeAction = (payload: any) => ({
  type: CREATE_PAYEE,
  payload,
});

export const deletePayeeAction = (payload: any) => ({
  type: DELETE_PAYEE,
  payload,
});

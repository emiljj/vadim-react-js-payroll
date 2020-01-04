import { CREATE_PAYEE } from './constants';
import { DELETE_PAYEE } from './constants';
import { ACTIVE_PAYEE } from './constants';
import { DEACTIVATE_PAYEE } from './constants';

export const createPayeeAction = (payload: any) => ({
  type: CREATE_PAYEE,
  payload,
});

export const deletePayeeAction = (payload: any) => ({
  type: DELETE_PAYEE,
  payload,
});

export const activePayeeAction = (payload: any) => ({
  type: ACTIVE_PAYEE,
  payload,
});

export const deactivePayeeAction = (payload: any) => ({
  type: DEACTIVATE_PAYEE,
  payload,
});

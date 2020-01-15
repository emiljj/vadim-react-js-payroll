import { CREATE_PAYEE } from './constants';
import { DELETE_PAYEE } from './constants';
import { ACTIVE_PAYEE } from './constants';
import { DEACTIVATE_PAYEE } from './constants';
import { PAY_PAYEE } from './constants';

export const createPayeeAction = (payload: any) => ({
  type: CREATE_PAYEE,
  payload,
});

export const deletePayeeAction = (payload: number) => ({
  type: DELETE_PAYEE,
  payload,
});

export const activePayeeAction = (payload: boolean) => ({
  type: ACTIVE_PAYEE,
  payload,
});

export const deactivatePayeeAction = (payload: boolean) => ({
  type: DEACTIVATE_PAYEE,
  payload,
});

export const payPayeeAction = (payload: number) => ({
  type: PAY_PAYEE,
  payload,
});

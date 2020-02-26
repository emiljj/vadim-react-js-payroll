import { CREATE_PAYEE } from './constants';
import { DELETE_PAYEE } from './constants';
import { ACTIVE_PAYEE } from './constants';
import { DEACTIVATE_PAYEE } from './constants';
import { PAY_PAYEE } from './constants';
import { UPDATE_PAYEE } from './constants';
import { GET_PAYEES_SUCCESS } from './constants';
import { GET_PAYEE_PROFILE_SUCCESS } from './constants';

export const createPayeeAction = (payload: any) => ({
  type: CREATE_PAYEE,
  payload,
});

export const deletePayeeAction = (payload: any) => ({
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

export const updatePayeeAction = (payload: any) => ({
  type: UPDATE_PAYEE,
  payload,
});

export const getPayeesSuccessAction = (payload: any) => ({
  type: GET_PAYEES_SUCCESS,
  payload,
});

export const getPayeesProfileSuccessAction = (payload: any) => ({
  type: GET_PAYEE_PROFILE_SUCCESS,
  payload,
});

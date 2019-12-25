import { CREATE_PAYEE } from './constants';

export const createPayeeAction = (payload: any) => ({
  type: CREATE_PAYEE,
  payload,
});

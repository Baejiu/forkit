import { USER_ACTION_TYPES } from '../../action-type';

export const loginUser = () => {
  return {
    type: USER_ACTION_TYPES.LOGIN_USER,
  };
};

export const logoutUser = () => {
  return {
    type: USER_ACTION_TYPES.LOGOUT_USER,
  };
};

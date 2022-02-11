import { USER_ACTION_TYPES } from '../../action-type';

const initialState = {
  name: null,
  nickname: null,
};
const subscribersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOGIN_USER:
      return {
        ...state,
        name: action.name,
        nickname: action.nickname,
      };
    case USER_ACTION_TYPES.LOGOUT_USER:
      return {
        ...state,
        name: null,
        nickname: null,
      };
    default:
      return state;
  }
};

export default subscribersReducer;

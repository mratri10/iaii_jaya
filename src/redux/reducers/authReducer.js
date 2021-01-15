import { LOGIN_SUCCESS, LOG_OUT, LOGIN_FAIL } from "redux/utils";

const INITIAL_STATE = {
  login: {},
};
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        message: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        login: {},
      };

    default:
      return state;
  }
};

export default authReducer;

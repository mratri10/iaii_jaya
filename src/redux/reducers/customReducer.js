import { CUSTOM_INPUT } from "redux/utils";

const INITIAL_STATE = {
  input: {},
};
const customReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CUSTOM_INPUT:
      return {
        ...state,
        input: action.payload,
      };

    default:
      return state;
  }
};

export default customReducer;

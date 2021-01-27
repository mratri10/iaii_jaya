import { GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from "redux/utils";

const INITIAL_STATE = {
  get: {},
  message: "",
};
const lokasiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        get: action.payload,
      };

    case GET_PRODUCT_FAIL:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default lokasiReducer;

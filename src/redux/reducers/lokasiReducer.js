import {
  GET_KOTA_SUCCESS,
  GET_KOTA_FAIL,
  GET_KECAMATAN_SUCCESS,
  GET_KECAMATAN_FAIL,
  GET_KELURAHAN_FAIL,
  GET_KELURAHAN_SUCCESS,
  GET_PROVINSI_SUCCESS,
  GET_PROVINSI_FAIL,
} from "redux/utils";

const INITIAL_STATE = {
  provinsi: {},
  kota: {},
  camat: {},
  lurah: {},
};
const lokasiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROVINSI_SUCCESS:
      return {
        ...state,
        provinsi: action.payload,
      };

    case GET_PROVINSI_FAIL:
      return {
        ...state,
        message: action.payload,
      };
    case GET_KOTA_SUCCESS:
      // console.log(JSON.stringify(action));
      return {
        ...state,
        kota: action.payload,
      };

    case GET_KOTA_FAIL:
      return {
        ...state,
        message: action.payload,
      };
    case GET_KECAMATAN_SUCCESS:
      return {
        ...state,
        camat: action.payload,
      };

    case GET_KECAMATAN_FAIL:
      return {
        ...state,
        message: action.payload,
      };
    case GET_KELURAHAN_SUCCESS:
      return {
        ...state,
        lurah: action.payload,
      };

    case GET_KELURAHAN_FAIL:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default lokasiReducer;

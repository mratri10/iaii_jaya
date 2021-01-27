import { GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS } from "redux/utils";

export const getProduct = (item) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: item,
});

export const errProduct = (item) => ({
  type: GET_PRODUCT_FAIL,
  payload: item,
});

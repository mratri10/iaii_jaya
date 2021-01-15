import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT,
  UPLOAD_STORAGE_SUCCESS,
  UPLOAD_STORAGE_FAIL,
} from "redux/utils";

export const getLogin = (item) => ({
  type: LOGIN_SUCCESS,
  payload: item,
});

export const errLogin = (item) => ({
  type: LOGIN_FAIL,
  payload: item,
});

export const getLogout = () => ({
  type: LOG_OUT,
});

export const uploadBerhasil = (params) => ({
  type: UPLOAD_STORAGE_SUCCESS,
  payload: params,
});

export const uploadGagal = (params) => ({
  type: UPLOAD_STORAGE_FAIL,
  payload: params,
});

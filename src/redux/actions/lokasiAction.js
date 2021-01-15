import {
  GET_KELURAHAN_SUCCESS,
  GET_KELURAHAN_FAIL,
  GET_KOTA_FAIL,
  GET_KECAMATAN_FAIL,
  GET_KECAMATAN_SUCCESS,
  GET_KOTA_SUCCESS,
  GET_PROVINSI_SUCCESS,
  GET_PROVINSI_FAIL,
} from "redux/utils";

export const getProvinsi = (item) => ({
  type: GET_PROVINSI_SUCCESS,
  payload: item,
});

export const errorProvinsi = (item) => ({
  type: GET_PROVINSI_FAIL,
  payload: item,
});

export const getKota = (item) => ({
  type: GET_KOTA_SUCCESS,
  payload: item,
});

export const errorKota = (item) => ({
  type: GET_KOTA_FAIL,
  payload: item,
});

export const getKecamatan = (item) => ({
  type: GET_KECAMATAN_SUCCESS,
  payload: item,
});

export const errorKecamatan = (item) => ({
  type: GET_KECAMATAN_FAIL,
  payload: item,
});

export const getKelurahan = (item) => ({
  type: GET_KELURAHAN_SUCCESS,
  payload: item,
});

export const errorKelurahan = (item) => ({
  type: GET_KELURAHAN_FAIL,
  payload: item,
});

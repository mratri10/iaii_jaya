import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "redux/reducers/authReducer";
import customReducer from "redux/reducers/customReducer";
import lokasiReducer from "./reducers/lokasiReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const rootReducer = combineReducers({
  auth: authReducer,
  custom: customReducer,
  lokasi: lokasiReducer,
});
export default persistReducer(persistConfig, rootReducer);

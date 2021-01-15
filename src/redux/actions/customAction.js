import { CUSTOM_INPUT } from "redux/utils";

export const customInput = (item) => ({
  type: CUSTOM_INPUT,
  payload: { ...item },
});

import axios from "axios";
import * as types from "../constants";
import { setAlert } from "./alertActions";

export const placeOrder = (orderForm) => async (dispatch) => {
  dispatch({
    type: types.PLACE_ORDER_REQUEST,
  });

  try {
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    const body = orderForm;

    const { data } = await axios.post("/orders", body, config);

    return dispatch({
      type: types.PLACE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    return dispatch({
      type: types.PLACE_ORDER_FAILURE,
      payload: error.response,
    });
  }
};

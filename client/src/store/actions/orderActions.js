import axios from "axios";
import * as types from "../constants";
import { setAlert } from "./alertActions";

export const placeOrder = (navigate, orderForm) => async (dispatch) => {
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

    const { data } = await axios.post("/api/orders", body, config);

    //once order is successfully placed, navigate to order page
    navigate("/order/" + data._id);

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

export const fetchOrder = (id) => async (dispatch) => {
  dispatch({
    type: types.FETCH_ORDER_REQUEST,
  });

  try {
    const { data } = await axios.get("/api/orders/" + id);
    return dispatch({
      type: types.FETCH_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: types.FETCH_ORDER_FAILURE,
      payload: error.response,
    });
  }
};

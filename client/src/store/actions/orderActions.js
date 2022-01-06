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

//cash on delivery order will be placed with payment status=> unpaid
//no transaction needed, just place order, and admin will update payment status later once its paid
export const placeCODOrder = (navigate, orderForm) => async (dispatch) => {
  dispatch({
    type: types.PLACE_COD_ORDER_REQUEST,
  });

  try {
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    const body = orderForm;

    const { data } = await axios.post("/api/orders/COD", body, config);

    //once order is successfully placed, navigate to order page
    navigate("/order/" + data._id);

    return dispatch({
      type: types.PLACE_COD_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch(
      setAlert(
        "danger",
        "Oops! Your order could not be placed. Please try again later"
      )
    ); //TODo: find possible error messages
    return dispatch({
      type: types.PLACE_COD_ORDER_FAILURE,
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

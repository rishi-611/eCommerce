import * as types from "../constants";
import axios from "axios";

const generalMsg = "Oh Snap! Something went wrong!";

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: types.PRODUCT_LOADING,
  });
  try {
    const { data } = await axios.get("/api/products");
    return dispatch({
      type: types.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    return dispatch({
      type: types.GET_PRODUCTS_FAILURE,
      payload: {
        message: err.response?.data?.message || generalMsg,
      },
    });
  }
};

export const getProduct = (id) => async (dispatch) => {
  dispatch({
    type: types.PRODUCT_LOADING,
  });

  try {
    const { data } = await axios.get("/api/products/" + id);
    console.log(data);
    return dispatch({
      type: types.GET_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    return dispatch({
      type: types.GET_PRODUCT_FAILURE,
      payload: {
        message: err.response?.data?.message || generalMsg,
      },
    });
  }
};

export const cleanupProduct = () => ({
  type: types.CLEANUP_PRODUCT,
});

import * as types from "../constants";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: types.PRODUCT_LOADING,
  });
  try {
    const { data } = await axios.get("/api/products");
    console.log(data);
    return dispatch({
      type: types.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    return dispatch({
      type: types.GET_PRODUCTS_FAILURE,
      payload: err,
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
    console.log(err);
    return dispatch({
      type: types.GET_PRODUCT_FAILURE,
      payload: err,
    });
  }
};

export const cleanupProduct = () => ({
  type: types.CLEANUP_PRODUCT,
});

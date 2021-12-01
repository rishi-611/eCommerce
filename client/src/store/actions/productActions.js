import * as types from "../constants";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  console.log("yo");
  try {
    const products = await axios.get("http://localhost:5000/api/products");
    console.log(products);
    return dispatch({
      type: types.GET_PRODUCTS_SUCCESS,
      payload: products,
    });
  } catch (err) {
    console.log(err);
    return dispatch({
      type: types.GET_PRODUCTS_FAILURE,
      payload: err,
    });
  }
};

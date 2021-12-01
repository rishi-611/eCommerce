import * as types from "../constants";

const initialState = {
  loading: false,
  error: null,
  productList: [],
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        productList: payload,
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        productList: [],
      };

    default:
      return state;
  }
};

export default productReducer;

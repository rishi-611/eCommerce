import * as types from "../constants";

const initialState = {
  loading: false,
  error: null,
  productList: [],
  product: null,
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

    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        product: payload,
      };
    case types.GET_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        product: payload,
      };
    case types.CLEANUP_PRODUCT:
      return {
        ...state,
        product: null,
      };

    case types.PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default productReducer;

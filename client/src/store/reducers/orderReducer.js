import * as types from "../constants";

const initialState = {
  orders: [],
  order: null,
  loading: false,
  error: null,
};

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PLACE_ORDER_REQUEST:
    case types.PLACE_COD_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.PLACE_ORDER_SUCCESS:
    case types.PLACE_COD_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        order: payload,
      };
    case types.PLACE_ORDER_FAILURE:
    case types.PLACE_COD_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        order: null,
      };
    case types.FETCH_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        order: payload,
      };
    case types.FETCH_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        order: null,
      };
    case types.FETCH_ALL_ORDERS_REQUEST:
      return {
        ...state,
        orders: [],
        loading: true,
      };
    case types.FETCH_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        orders: payload,
        error: null,
        loading: false,
      };
    case types.FETCH_ALL_ORDERS_FAILURE:
      return {
        ...state,
        orders: [],
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default orderReducer;

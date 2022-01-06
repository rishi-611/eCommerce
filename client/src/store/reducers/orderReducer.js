import * as types from "../constants";

const initialState = {
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

    default:
      return state;
  }
};

export default orderReducer;

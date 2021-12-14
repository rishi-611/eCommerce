import * as types from "../constants.js";
const initialState = {
  user: null,
  token: null,
  loading: false,
  isLoggedIn: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTRATION_FAILURE:
    case types.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        isLoggedIn: false,
        error: payload,
      };

    case types.REGISTRATION_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
        loading: false,
        error: null,
      };

    case types.LOG_OUT:
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        isLoggedIn: false,
        error: null,
      };

    default:
      return state;
  }
};
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
    case types.LOAD_USER_FAILED:
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
    case types.USER_LOADED:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
        loading: false,
        error: null,
      };

    case types.EDIT_USERNAME_SUCCESS:
    case types.EDIT_PASSWORD_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: null,
      };

    case types.EDIT_USERNAME_FAILURE:
    case types.EDIT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
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

export default userReducer;

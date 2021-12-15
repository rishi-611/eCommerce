import axios from "axios";
import setAuthToken from "../../config/setAuthToken";
// import { setAlert } from "./alerts";
// import { clearProfile } from "./profile";
import {
  REGISTRATION_FAILURE,
  REGISTRATION_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_LOADED,
  AUTH_FAILURE,
  LOG_OUT,
} from "../constants.js";

// will be called when app first loads
// sets up global axios header if localstorage already has token
// fetches user data=>will fail if no token
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/users/me");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_FAILURE,
    });
  }
};

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    const body = {
      name,
      email,
      password,
    };

    try {
      const userData = await axios.post("/api/users", body, config);
      if (!userData) {
        return;
      }
      //  if token received

      //store token in localstoragw
      localStorage.setItem("token", userData.data.token);

      //update global axios headers with token
      setAuthToken(userData.data.token);

      dispatch({
        type: REGISTRATION_SUCCESS,
        payload: {
          token: userData.data.token,
          user: userData.data.user,
        },
      });
      // load the user to state when registerrations succeeds
      //   dispatch(loadUser());
    } catch (err) {
      // errors will be an array of objs
      console.log(err);
      const errors = err.response?.data?.errors;
      // if (errors) {
      //   errors.forEach((error) => {
      //     dispatch(setAlert("danger", error.msg));
      //   });
      // }
      dispatch({
        type: REGISTRATION_FAILURE,
        payload: errors,
      });
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };
    const body = {
      email,
      password,
    };

    try {
      const userData = await axios.post("/api/users/login", body, config);
      if (!userData) {
        return;
      }

      //store token in localstoragw
      localStorage.setItem("token", userData.data.token);

      //update global axios headers with token
      setAuthToken(userData.data.token);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: userData.data.token,
          user: userData.data.user,
        },
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response,
      });
    }
  };

export const logout = () => {
  //clear auth token from global headers
  setAuthToken();

  //clear localstorage
  localStorage.removeItem("token");

  return {
    type: LOG_OUT,
  };
};

// export const deleteAccount = (history) => async (dispatch) => {
//   try {
//     await axios.delete("/api/users/me");

//     history.push("/");
//     dispatch(clearProfile());
//     dispatch({
//       type: USER_DELETED,
//     });
//     dispatch(setAlert("danger", "Your account was removed permanently"));
//   } catch (err) {
//     err.resonse.data.errors.forEach((error) =>
//       dispatch(setAlert("danger", error.msg))
//     );
//   }
// };

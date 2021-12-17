import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import decode from "jwt-decode";

// if there are more than one middlewares, add them in this array
const middleware = [thunk];

//look for cart in localstorage, if present, initialize state with cart value
let cartItems = localStorage.getItem("cartItems");
if (!cartItems) {
  cartItems = [];
} else {
  cartItems = JSON.parse(cartItems);
}

const initialState = {
  cart: {
    loading: false,
    error: null,
    cartItems,
  },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

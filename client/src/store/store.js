import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

// if there are more than one middlewares, add them in this array
const middleware = [thunk];

//look for cart in localstorage, if present, initialize state with cart value
let cartItems = localStorage.getItem("cartItems");
if (!cartItems) {
  cartItems = [];
} else {
  cartItems = JSON.parse(cartItems);
}

let paymentMethod = localStorage.getItem("paymentMethod") || "paypal";

//initial setup for shipping address
let address = localStorage.getItem("address");
if (!address) {
  address = {};
} else {
  address = JSON.parse(address);
}

const initialState = {
  cart: {
    loading: false,
    error: null,
    cartItems,
    address,
    paymentMethod,
  },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

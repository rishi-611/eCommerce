import * as types from "../constants";
import axios from "axios";

//fetches cart from localstorage and updates store
// export const loadCart = () => (dispatch) => {
//   try {
//     let cartItems = localStorage.getItem("cartItems");
//     if (!cartItems) return;

//     //cart exists already
//     cartItems = JSON.parse(cartItems);
//     return dispatch({
//       type: types.LOAD_CART_SUCCESS,
//       payload: cartItems,
//     });
//   } catch (err) {
//     //errors dont really matter as we are initializing an empty array anyway
//     console.error(err);
//   }
// };

//fetch product details and push it to cart, and save new cart item list to localstorage
export const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/api/products/" + productId);

    const product = {
      productId,
      name: data.name,
      price: data.price,
      image: data.image,
      countInStock: data.countInStock,
      qty,
    };

    dispatch({
      type: types.ADD_TO_CART_SUCCESS,
      payload: product,
    });
    console.log("dispatched");

    //get updated cartItems from state, push product, and update localstorage
    //this code will be reached after dispatch is executed, hence state cartItems are updated already
    let cartItems = getState().cart.cartItems;
    console.log("updated cart: ");
    console.log(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (err) {
    console.error(err);
    return dispatch({
      type: types.ADD_TO_CART_FAILURE,
      payload:
        err.response?.data?.message ||
        `Failed to store add product with id: ${productId} into cart!`,
    });
  }
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  //remove item from state cart
  dispatch({
    type: types.REMOVE_FROM_CART,
    payload: {
      productId,
    },
  });

  //update localstorage from newly updated state cart
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveAddress = (address) => (dispatch) => {
  //save address in localstorage
  localStorage.setItem("address", JSON.stringify(address));

  //save address in redux store
  dispatch({
    type: types.CART_SAVE_ADDRESS,
    payload: address,
  });
};

export const savePaymentMethod = (method) => (dispatch) => {
  //save method in localstorage
  localStorage.setItem("paymentMethod", method);

  //save method in redux store
  dispatch({
    type: types.CART_SAVE_PAYMENT_METHOD,
    payload: method,
  });
};

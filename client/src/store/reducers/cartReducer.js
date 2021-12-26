import * as types from "../constants";

const initialState = {
  cartItems: [],
  error: null,
  loading: false,
  address: {},
};

//cart items will contain a list of products that are added to cart by user
//cart will be stored in localstorage

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOAD_CART_SUCCESS:
      return {
        ...state,
        cartItems: payload,
        loading: false,
        error: null,
      };

    case types.ADD_TO_CART_SUCCESS:
      //if product already exists in list, update it with new one, if it doesnt, push it to end
      const existingProduct = state.cartItems.find(
        (product) => product.productId === payload.productId
      );
      if (!existingProduct) {
        return {
          ...state,
          cartItems: [...state.cartItems, payload],
          error: null,
          loading: false,
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.map((product) =>
            product.productId === payload.productId ? payload : product
          ),
          error: null,
          loading: false,
        };
      }

    case types.ADD_TO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== payload.productId
        ),
      };

    case types.CART_SAVE_ADDRESS:
      return {
        ...state,
        address: payload,
      };
    default:
      return state;
  }
};

export default cartReducer;

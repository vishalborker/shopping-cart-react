import { ADD_CART } from './actionTypes';

let nextToDoId = 0;

export const addToCart = cartItems => ({
    type: ADD_CART,
    payload: {
      cartId: ++nextToDoId,
      cartItems
    }
});
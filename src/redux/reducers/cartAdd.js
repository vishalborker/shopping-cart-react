import { ADD_CART } from "../actionTypes";

const initialState = {
  cartItems: [
    { id: 404,
      name: "Adidas shoes",
      price: 10.99,
      itemsLeft: 99,
      gender: "male",
      image: "http://localhost:5000/api/v1/images/adidas-shoes.jpg"
    },
    { id: 405,
      name: "Adidas shoes",
      price: 10.99,
      itemsLeft: 99,
      gender: "male",
      image: "http://localhost:5000/api/v1/images/adidas-shoes.jpg"
    }
  ]
};
console.log('initialState', initialState);
export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_CART: {
      return {
        ...state,
        cartItems: [...this.state.cartItems, action.payload]
      }
    }
    default:
      return state;
  }
}

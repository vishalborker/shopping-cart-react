const initState = {
    cartItems: [
        // {
        //     id: 1,
        //     name: "Adidas shoes",
        //     price: 10.99,
        //     itemsLeft: 99,
        //     gender: "male",
        //     count: 1,
        //     image: "http://localhost:5000/api/v1/images/adidas-shoes.jpg"
        //   },
        //   {
        //     id: 2,
        //     name: "Adidas tshirt",
        //     price: 10.99,
        //     itemsLeft: 99,
        //     gender: "female",
        //     count: 1,
        //     image: "http://localhost:5000/api/v1/images/adidas-tshirt.jpg"
        //   }
    ]
}

const shouldUpdateCart = (cartItems, newCartItem) => {
  console.log('cartItems == ', cartItems, 'newCartItem == ', newCartItem)
  if (cartItems && cartItems.length) {
    const found = cartItems.find(a => a.id === newCartItem.id);
    console.log('Found Element', found);
    if (found) {
      found.count++;
      found.itemsLeft--;
      return true
    } else {
      return false;
    }
  }
  return false;
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'GET_CART') {
      return state;
    } else if (action.type === 'ADD_CART') {
      if (shouldUpdateCart(state.cartItems, action.payload)) {
        return { ...state, cartItems: [...state.cartItems]};
      } else {
        action.payload.count = 1;
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        }
      }
    }
    return state;
}

export default rootReducer;
const initState = {
    cartItems: [
        { id: 400,
            name: "Adidas shoes",
            price: 10.99,
            itemsLeft: 99,
            gender: "male",
            image: "http://localhost:5000/api/v1/images/adidas-shoes.jpg"
          },
          { id: 401,
            name: "Adidas shoes",
            price: 10.99,
            itemsLeft: 99,
            gender: "male",
            image: "http://localhost:5000/api/v1/images/adidas-shoes.jpg"
          }
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;
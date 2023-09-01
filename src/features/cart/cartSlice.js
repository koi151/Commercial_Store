// import { createSlice } from "@reduxjs/toolkit";

// const initCart = [];

// const cartSlice = createSlice ({
//   name: 'cart',
//   initialState: initCart,
//   reducers: {
//     addToCart: (state, action) => {
//       state.push({
//         id: action.payload.id,
//         quantity: 1,
//         info: action.payload.info
//       })
//     }
//   }
// })

// export const { addToCart } = cartSlice.actions;
// export const selectCart = (state) => state.cart;

// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initCart = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: initCart,
  reducers: {
    addToCart: (state, action) => {
      state.push({
        id: action.payload.id,
        info: action.payload.info,
        quantity: 1
      });
    },
    updateCart: (state, action) => {
      const productUpdate = state.find(product => product.id === action.payload.id);
      if (productUpdate)
        productUpdate.quantity += action.payload.quantity;
    }
  }
});

export const { addToCart, updateCart } = cartSlice.actions;
export const selectCart = (state) => state.cart;

export default cartSlice.reducer;

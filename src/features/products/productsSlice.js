import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [], 
    loading: true,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = [...action.payload];
      state.loading = false;
    }
  }
})

export const { setProducts } = productsSlice.actions;

export const getProducts = (state) => state.products.data;
export const getProductsLoadingStatus = (state) => state.products.loading;
// export const getProductsLoadingStatus = (state) => state.products.loading;

export default productsSlice.reducer;
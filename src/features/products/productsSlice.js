import { createSlice } from "@reduxjs/toolkit";

const initProducts = {
  data: [], 
  loading: true
}

const productsSlice = createSlice({
  name: 'products',
  initialState: initProducts,
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
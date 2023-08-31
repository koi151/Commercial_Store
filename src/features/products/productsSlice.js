import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [], 
    loading: true,
    categories: []
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = [...action.payload];
      state.loading = false;
    },
    setCategories: (state, action) => {
      state.categories = [...action.payload];
    },
  }
})

export const { setProducts, setCategories } = productsSlice.actions;

export const getProducts = (state) => state.products.data;
export const getCategories = (state) => state.products.categories;
export const getProductsLoadingStatus = (state) => state.products.loading;
// export const getProductsLoadingStatus = (state) => state.products.loading;


export default productsSlice.reducer;
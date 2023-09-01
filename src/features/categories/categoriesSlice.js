import { createSlice } from "@reduxjs/toolkit";

const initialCategorySearch = {
  data: [],
  loading: true
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialCategorySearch,
  reducers: {
    setCategories: (state, action) => {
      state.data = action.payload
      state.loading = false
    }
  }
})

export const { setCategories } = categoriesSlice.actions;

export const getCategories = (state) => state.categories.data; 
export const getCategoriesLoadingStatus = (state) => state.categories.loading; 

export default categoriesSlice.reducer;
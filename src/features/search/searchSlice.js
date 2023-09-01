import { createSlice } from "@reduxjs/toolkit";

// http://localhost:3002/products?q=&price_gte=10&price_lte=300&_sort=price&_order=asc

const initialSearchState = {
  searchTerm: '',
  category: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
  reducers: {
    setSearchTerm: (state, action) => {
      Object.assign(state, initialSearchState);
      state.searchTerm = action.payload
    },
    setCategorySearch: (state, action) => {
      state.category = action.payload
    },
    resetFilters: (state) => {
      Object.assign(state, initialSearchState);
    }
  }
})

export const { setSearchTerm, setCategorySearch, resetFilters } = searchSlice.actions;

export const getSearchTerm = (state) => state.search.searchTerm;
export const getCategorySearch = (state) => state.search.category;

export default searchSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

// http://localhost:3002/products?q=&price_gte=10&price_lte=300&_sort=price&_order=asc

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    sortby: '',
    order: '',
    minPrice: '',
    maxPrice: ''
  },

  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setAscendingPrice: (state) => {
      state.sortby = 'price'
      state.order = 'asc'
    },
    setDescendingPrice: (state) => {
      state.sortby = 'price'
      state.order = 'desc'
    },
    setPriceRange: (state, action) => {
      state.minPrice = action.payload.minPrice
      state.maxPrice = action.payload.maxPrice
    }
  }
})

export const { setSearchTerm, setAscendingPrice, setDescendingPrice, setPriceRange } = searchSlice.actions;

export const getSearchTerm = (state) => state.search.searchTerm;
export const getSortBy = (state) => state.search.sortby;
export const getOrder = (state) => state.search.order;
export const getMinPrice = (state) => state.search.minPrice;
export const getMaxPrice = (state) => state.search.maxPrice;

export default searchSlice.reducer
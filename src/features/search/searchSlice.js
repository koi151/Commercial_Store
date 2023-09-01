import { createSlice } from "@reduxjs/toolkit";

// http://localhost:3002/products?q=&price_gte=10&price_lte=300&_sort=price&_order=asc

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    category: '',
    sortbyPrice: false,
    sortbyDiscount: false,
    priceOrder: '',
    discountOrder: '',
    minPrice: '',
    maxPrice: ''
  },

  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setCategorySearch: (state, action) => {
      state.category = action.payload
    },
    setDiscountSearch: (state, action) => {
      state.sortbyDiscount = true
      state.discountOrder = action.payload
    },
    setPriceSearch: (state, action) => {
      state.sortbyPrice = true
      state.priceOrder = action.payload;
    },
    setPriceRange: (state, action) => {
      state.minPrice = action.payload.minPrice
      state.maxPrice = action.payload.maxPrice
    }
  }
})

export const { setSearchTerm, setPriceSearch, setPriceRange, setCategorySearch, setDiscountSearch } = searchSlice.actions;

export const getSearchTerm = (state) => state.search.searchTerm;
export const getCategorySearch = (state) => state.search.category;
export const getSortByPriceState = (state) => state.search.sortbyPrice;
export const getPriceOrderSearch = (state) => state.search.priceOrder;
export const getSortByDiscountState = (state) => state.search.sortbyDiscount;
export const getDiscountOrderSearch = (state) => state.search.discountOrder;
export const getMinPrice = (state) => state.search.minPrice;
export const getMaxPrice = (state) => state.search.maxPrice;

export default searchSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import searchSlice from "../features/search/searchSlice";

const store = configureStore({
    reducer: {
        search: searchSlice,
        products: productsSlice
    }
})

export default store;
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import searchSlice from "../features/search/searchSlice";
import categoriesSlice from "../features/categories/categoriesSlice";

const store = configureStore({
    reducer: {
        search: searchSlice,
        products: productsSlice,
        categories: categoriesSlice
    }
})

export default store;
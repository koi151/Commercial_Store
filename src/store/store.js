import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import searchSlice from "../features/search/searchSlice";
import categoriesSlice from "../features/categories/categoriesSlice";
import cartSlice from "../features/cart/cartSlice";

const store = configureStore({
    reducer: {
        search: searchSlice,
        products: productsSlice,
        categories: categoriesSlice,
        cart: cartSlice
    }
})

export default store;
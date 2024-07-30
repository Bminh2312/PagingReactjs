import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import addToCartSlice from "./addToCartSlice";

const store = configureStore({
    reducer:{
        products:productSlice,
        cart:addToCartSlice,
    }
})

export default store
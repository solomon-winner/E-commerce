import {configureStore} from "@reduxjs/toolkit";

export const CartActions = Cartslice.actions;
const store = configureStore({
    reducer: {
        Cart: Cartslice.reducer
    }
})
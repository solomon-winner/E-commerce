import {configureStore} from "@reduxjs/toolkit";
import { Cartslice } from "./Cartslice";

export const CartActions = Cartslice.actions;
const store = configureStore({
    reducer: {
        Cart: Cartslice.reducer
    }
})
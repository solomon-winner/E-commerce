import { createSlice } from "@reduxjs/toolkit";

export const Cartslice = createSlice({
    name: 'Cart',
    initialState: {
        Product: "",
        Company: "",
        Color: "",
        Size: "",
        Price: 0,
        Payment: "none",
        quantity: 0,
    },
    reducers : {
        AddToCart(state, action) {

        },
        ChangeChoice(state, action) {

        },
        DeleteFromCart(state, action) {

        }
    }
})
export const CartActions = Cartslice.actions;

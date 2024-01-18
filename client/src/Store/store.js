import {configureStore, createSlice} from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name: 'Cart',
    initialState: {
        Product: "",
        Company: "",
        Color: "",
        Size: "",
        Price: "",
        Payment: "none"
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
const store = configureStore({
    reducer: {
        Cart: Cartslice.reducer
    }
})
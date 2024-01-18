import { createSlice } from "@reduxjs/toolkit";

export const Wishslice = createSlice({
    name: 'Wish',
    initialState : {
        Product: "",
        Company: "",
        Color: "",
        Size: "",
        Price: "",
        quantity: 0,
    },
    reducers: {
        AddWishlist(state, action) {

        },
        ChangeWishlist(state, action) {

        },
        DeleteWishlist(state, action) {

        }
    }
});
export const WishActions = Wishslice.actions;
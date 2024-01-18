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
        
    }
})
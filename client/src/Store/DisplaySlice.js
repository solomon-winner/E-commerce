import { createSlice } from "@reduxjs/toolkit";

export const DisplaySlice = createSlice({
    name: 'Display',
    initialState: {
        isDptDisplayed: false,
        isCartDisplayed: false,
        isWishDisplayed: false,
    },
    reducers: {
        //this is for the departement menu
        DisplayDpt(state, action){
            console.log("state.isCartDisplayed from Display : " + state.isCartDisplayed)
            console.log("this is from the paylod => " + action.payload)
            state.isDptDisplayed = action.payload
        },
        DontDisplayDpt(state, action) {

            state.isDptDisplayed = action.payload;
            console.log("state.isCartDisplayed from DontDisplay : " + state.isCartDisplayed)

        },
        //this is for the cart list
        DisplayCart (state, action) {
            state.isCartDisplayed = action.payload
        },
        DontDisplayCart (state, action) {
            state.isCartDisplayed = action.payload
        },
        //this is for the wish list 
        DisplayWish (state, action) {
            state.isWishDisplayed = action.payload
        },
        DontDisplayWish (state, action) {
            state.isWishDisplayed = action.payload
        }
    }
})
export const DisplayActions = DisplaySlice.actions




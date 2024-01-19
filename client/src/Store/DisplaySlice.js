import { createSlice } from "@reduxjs/toolkit";

export const DisplaySlice = createSlice({
    name: 'Display',
    initialState: {
        isDptDisplayed: false,
        isCartDisplayed: false,
    },
    reducers: {
        DisplayDpt(state, action){
            console.log("state.isCartDisplayed from Display : " + state.isCartDisplayed)
            console.log("this is from the paylod => " + action.payload)
            state.isDptDisplayed = action.payload
        },
        DontDisplayDpt(state, action) {

            state.isDptDisplayed = action.payload;
            console.log("state.isCartDisplayed from DontDisplay : " + state.isCartDisplayed)

        },
        DisplayCart (state, action) {
            state.isCartDisplayed = action.payload
        },
        DontDisplayCart (state, action) {
            state.isDptDisplayed = action.payload
        }
    }
})
export const DisplayActions = DisplaySlice.actions




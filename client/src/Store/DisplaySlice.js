import { createSlice } from "@reduxjs/toolkit";

export const DisplaySlice = createSlice({
    name: 'Display',
    initialState: {
        isDisplayed: false,
    },
    reducers: {
        Display(state, action){
            state.isDisplayed = action.payload
        },
        DontDisplay(state, action) {
            state.isDisplayed = action.payload
        }
    }
})


export const DisplayActions = DisplaySlice.actions
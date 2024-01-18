import { createSlice } from "@reduxjs/toolkit";

export const DisplaySlice = createSlice({
    name: 'Display',
    initialState: {
        isDisplayed: false,
    },
    reducers: {
        Display(state, action){
            state.Display = true
        },
        DontDisplay(state, action) {
            state.Display = false
        }
    }
})


export const DisplayActions = DisplaySlice.actions
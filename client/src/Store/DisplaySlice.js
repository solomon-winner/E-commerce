import { createSlice } from "@reduxjs/toolkit";

export const DisplaySlice = createSlice({
    name: 'Display',
    initialState: {
        Displayed: false,
    },
    reducers: {
        Display(state, action){
            state.Displayed = true
        },
        DontDisplay(state, action) {
            state.Displayed = false
        }
    }
})

export const DisplayActions = DisplaySlice.actions
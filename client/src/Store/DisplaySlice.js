import { createSlice } from "@reduxjs/toolkit";

export const DisplaySlice = createSlice({
    name: 'Display',
    initialState: {
        Displayed: false,
    },
    reducers: {
        Display(state, action){

        },
        DontDisplay(state, action) {
            
        }
    }
})
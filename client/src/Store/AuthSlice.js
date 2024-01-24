import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice ({
    name: "Authentication",
    initialState: {
        signUp: {
            Name: "",
            Nitche: "",
            Bank: "",
            Bankaccount: "",
            Password: "",
            Email: "",
            Country: "",
            City: "",
            subCity: "",
            street: "",
        },
        login:{
            Email: "",
            Password: ""
        },
        isLoggedIn: false,
        isSignedUp: false,
    },
    reducers: {
        logIn (state, action) {

        },
        signUp (state, action) {

        },
        handleChange (state, action) {
            state.signUp = action.payload;
            console.log("...state..."+state.isSignedUp);
            console.log("...action..."+ Object.entries(action.payload));
            state.isSignedUp = true
            console.log("...state...after..."+state.isSignedUp);

        }
    }

 })
 export const AuthActions = AuthSlice.actions;
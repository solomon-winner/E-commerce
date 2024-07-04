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
            Password: "",
        },
        isLoggedIn: false,
        isSignedUp: false,
        error: null,
       // currentUser: JSON.parse(localStorage.getItem("user")) || null
    },
    reducers: {
        logIn (state, action) {
            state.isLoggedIn = true;
            state.currentUser = action.payload;
        },
         
        handleChange (state, action) {
            state.signUp = action.payload;
            console.log("...action..."+ Object.entries(action.payload));
            state.isSignedUp = true
        }
    }

 })
 export const AuthActions = AuthSlice.actions;
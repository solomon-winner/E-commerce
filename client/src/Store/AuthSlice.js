import { createSlice } from "@reduxjs/toolkit";
import { Request } from "../Request";

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
        error: null,
        currentUser: JSON.parse(localStorage.getItem("user")) || null
    },
    reducers: {
        logIn (state, action) {

        },
         register (state, action) {
            console.log("register!");
           
            
            
        },
        handleChange (state, action) {
            state.signUp = action.payload;
            console.log("...action..."+ Object.entries(action.payload));
            state.isSignedUp = true
        }
    }

 })
 export const AuthActions = AuthSlice.actions;
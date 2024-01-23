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
        }
    },
    reducers: {
        logIn (state, action) {

        },
        signUp (state, action) {

        },
        handleChange (state, action) {
           // state.Authentication.signUp.action.payload[0] = action.payload[1];
            console.log(state.Authentication.signUp);
            console.log("......."+state.Authentication.signUp.action.payload[0]) 
        }
    }

 })
 export const AuthActions = AuthSlice.actions;
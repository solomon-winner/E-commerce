import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice ({
    name: "Authentication",
    initialState:[{
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
    },{
        Email: "",
        Password: ""
    }],
    reducers: {
        logIn (state, action) {

        },
        signUp (state, action) {

        },
        handleChange (state, action) {
            console.log(action.payload);
            state.Authentication[0].action.payload[0] = action.payload[1];
            console.log(state.Authentication[0]);
        }
    }

 })
 export const AuthActions = AuthSlice.actions;
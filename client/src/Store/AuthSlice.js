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
            console.log(action)
        }
    }

 })
 export const AuthActions = AuthSlice.actions;
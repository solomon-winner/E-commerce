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
        async register (state, action) {
            
           try {
              await Request.post("/users", state.signUp);
            state.isSignedUp = true
            }catch(err){
                state.error = err.response.data;
            }             
            
        },
        handleChange (state, action) {
            state.signUp = action.payload;
            console.log("...action..."+ Object.entries(action.payload));

        }
    }

 })
 export const AuthActions = AuthSlice.actions;
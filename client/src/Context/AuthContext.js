import { createContext } from "react";
import { Request } from "../Request";
import { useSelector } from "react-redux";

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const current = useSelector((state) => state.Authentication.currentUser);
   
    const login = async (inputs) => {
    const res = await Request.post("/users").then()
} 
}

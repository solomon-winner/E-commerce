import { createContext, useEffect } from "react";
import { Request } from "../Request";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../Store/AuthSlice";

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const current = useSelector((state) => state.Authentication.currentUser);
   const dispatch = useDispatch();
    const user = async (inputs) => {
    const res = await Request.post("/auth/login", inputs)
    dispatch(AuthActions.logIn(res.data));
} 

useEffect(() => {
    localStorage.setItem("user", JSON.stringify(current));
}, [current])

return (
    <Context.Provider value = {{current, user}}>
        {children}
    </Context.Provider>
)
}

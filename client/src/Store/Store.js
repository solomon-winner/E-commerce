import {configureStore} from "@reduxjs/toolkit";
import { Cartslice } from "./Cartslice";
import { Wishslice } from "./Wishslice";
import { CommentSlice } from "./CommentSlice";
import { DisplaySlice } from "./DisplaySlice";


const Store = configureStore({
    reducer: {
        Cart: Cartslice.reducer,
        Wish: Wishslice.reducer,
        Comment: CommentSlice.reducer,
        Display: DisplaySlice.reducer
    }
})
export const {DisplayActions} = DisplaySlice.actions
export default Store;
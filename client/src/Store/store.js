import {configureStore} from "@reduxjs/toolkit";
import { Cartslice } from "./Cartslice";
import { Wishslice } from "./Wishslice";
import { CommentSlice } from "./CommentSlice";

const store = configureStore({
    reducer: {
        Cart: Cartslice.reducer,
        Wish: Wishslice.reducer,
        Comment: CommentSlice.reducer,
    }
})
export default store;
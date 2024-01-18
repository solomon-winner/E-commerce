import {createSlice} from "@reduxjs/toolkit";

export const CommentSlice = createSlice({
    name: 'Comment',
    initialState: {
        Product: "",
        Company: "",
        Customer: "",
        Comment: "",
    },
    reducers: {
        AddComment(state, action) {

        },
        UpdateComment(state, action) {
            
        },
        DeleteComment(state, action) {
            
        }
    }
})
export const CommentAction = CommentSlice.actions;
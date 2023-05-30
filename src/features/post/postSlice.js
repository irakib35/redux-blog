import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBlogs from "./postAPI";

const initialState = {
    isLoading: false,
    isError: false,
    post: {},
    errmsg: "",
};

export const fetchPost = createAsyncThunk("post/fetchpost", async (id) => {
    const response = await getBlogs(id);

    return response;
});

const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.post = {};
                state.errmsg = "";
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.post = action.payload;
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.post = {};
                state.errmsg = action.error?.message;
            });
    },
});

export default postSlice.reducer;

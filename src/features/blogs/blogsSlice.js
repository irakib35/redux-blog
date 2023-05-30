import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBlogs from "./blogsAPI";

const initialState = {
    isLoading: false,
    isError: false,
    blogs: [],
    errmsg: "",
};

export const fetchBlogs = createAsyncThunk("blogs/fetchblogs", async () => {
    const response = await getBlogs();

    return response;
});

const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.blogs = [];
                state.errmsg = "";
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blogs = action.payload;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.blogs = [];
                state.errmsg = action.error?.message;
            });
    },
});

export default blogsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getRelatedPost from "./relatedPostAPI";

const initialState = {
    posts: [],
};

export const fetchRelatedPost = createAsyncThunk(
    "relatedPost/fetch",
    async ({ currentId, tags }) => {
        const response = await getRelatedPost(currentId, tags);
        return response;
    }
);

const relatedPostSlice = createSlice({
    name: "relatedPost",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedPost.pending, (state, action) => {
                state.posts = [];
            })
            .addCase(fetchRelatedPost.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(fetchRelatedPost.rejected, (state, action) => {
                state.posts = [];
            });
    },
});

export default relatedPostSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import updateLikes from "./likeAPI";

const initialState = {
    nplikes: 0,
};

export const fetchLikes = createAsyncThunk(
    "likes/update",
    async ({ id, nplikes }) => {
        const response = await updateLikes(id, nplikes);
        return response.likes;
    }
);

const likeSlice = createSlice({
    name: "likes",
    initialState,
    reducers: {
        loadLikes: (state, action) => {
            state.nplikes = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLikes.pending, (state) => {
                state.isLoading = true;
                state.iserror = false;
            })
            .addCase(fetchLikes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.nplikes = action.payload;
            })
            .addCase(fetchLikes.rejected, (state, action) => {
                state.isLoading = false;
                state.iserror = true;
                state.nplikes = action.payload;
            });
    },
});

export const { loadLikes } = likeSlice.actions;
export default likeSlice.reducer;

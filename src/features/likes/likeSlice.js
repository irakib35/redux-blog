import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import updateLikes from "./likeAPI";

const initialState = {
    isLoading: false,
    nplikes: 0,
    iserror: false,
};

export const fetchLikes = createAsyncThunk(
    "likes/update",
    async ({ id, likes }) => {
        const response = await updateLikes(id, likes);
        return response.likes;
    }
);

const likeSlice = createSlice({
    name: "likes",
    initialState,
    reducers: {
        updateInitials: (state, action) => {
            console.log(action.payload);
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
                //console.log({ action });
            })
            .addCase(fetchLikes.rejected, (state, action) => {
                state.isLoading = false;
                state.iserror = true;
                state.nplikes = action.payload;
            });
    },
});

export const { updateInitials } = likeSlice.actions;
export default likeSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import updateSaved from "./saveAPI";

const initialState = {
    npsaved: false,
};

export const fetchSaved = createAsyncThunk(
    "saved/update",
    async ({ id, npsaved }) => {
        const response = await updateSaved(id, npsaved);
        return response.isSaved;
    }
);

const savedSlice = createSlice({
    name: "saved",
    initialState,
    reducers: {
        loadSaved: (state, action) => {
            state.npsaved = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSaved.fulfilled, (state, action) => {
                state.npsaved = action.payload;
            })
            .addCase(fetchSaved.rejected, (state, action) => {
                state.npsaved = action.payload;
            });
    },
});

export const { loadSaved } = savedSlice.actions;
export default savedSlice.reducer;

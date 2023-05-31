import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sort: "",
    filter: "All",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        changeFilters: (state, action) => {
            state.filter = action.payload;
        },
        changeSort: (state, action) => {
            state.sort = action.payload;
        },
    },
});

export const { changeFilters, changeSort } = filtersSlice.actions;
export default filtersSlice.reducer;

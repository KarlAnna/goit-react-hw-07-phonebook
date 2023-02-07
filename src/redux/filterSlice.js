import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = ""

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        updateFilter(state, { payload }) {
            return payload
        }
    }
})

export const { updateFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer
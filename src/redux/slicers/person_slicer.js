import { createSlice } from "@reduxjs/toolkit";

const initialState = []; //No data in the array.

const perplelice = createSlice({
  name: "perple",
  initialState,
  reducers: {
    addPerson: (state, action) => [...state, action.payload],
  },
});

export const { addPerson } = perplelice.actions;
export default perplelice.reducer;

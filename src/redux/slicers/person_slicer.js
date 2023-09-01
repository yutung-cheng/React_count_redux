import { createSlice } from "@reduxjs/toolkit";

const initialState = []; //No data in the array.

const peoplelice = createSlice({
  name: "people",
  initialState,
  reducers: {
    addPerson: (state, action) => [action.payload, ...state],
  },
});

export const { addPerson } = peoplelice.actions;
export default peoplelice.reducer;

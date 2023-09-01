import { createSlice } from "@reduxjs/toolkit";

const initialState = []; //No data in the array.

const personSlice = createSlice({
  name: "persons",
  initialState,
  reducers: {
    addPerson: (state, action) => [...state, action.payload],
  },
});

export const { addPerson } = personSlice.actions;
export default personSlice.reducer;

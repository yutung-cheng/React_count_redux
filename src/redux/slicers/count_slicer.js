import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0, selectedNumber: 1 };

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setSelectedNumber: (state, action) => {
      state.selectedNumber = action.payload;
    },
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
    reset: () => initialState,
  },
});

export function incrementAsync(value, time) {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(increment(value));
    }, time);
  };
}

export function incrementIfOdd(stateValue, amount) {
  return (e) => {
    if (stateValue & 1) {
      e(increment(amount));
    }
  };
}

export const { setSelectedNumber, increment, decrement, reset } =
  countSlice.actions;

export default countSlice.reducer;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedNumber,
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync,
  reset,
} from "../../redux/count_slicer";

export default function Count() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.count);

  return (
    <div>
      <h1>Current total: {state.value} </h1>
      <select
        value={state.selectedNumber}
        onChange={(e) => dispatch(setSelectedNumber(e.target.value * 1))}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      &nbsp; &nbsp;
      <button onClick={() => dispatch(increment(state.selectedNumber))}>
        +
      </button>
      &nbsp;
      <button onClick={() => dispatch(decrement(state.selectedNumber))}>
        -
      </button>
      &nbsp;
      <button
        onClick={() =>
          dispatch(incrementIfOdd(state.value, state.selectedNumber))
        }
      >
        Increment Odd
      </button>
      &nbsp;
      <button onClick={() => dispatch(incrementAsync(state.selectedNumber))}>
        Increment Async
      </button>
      &nbsp;
      <button onClick={() => dispatch(reset())}>Reset</button> &nbsp;
    </div>
  );
}

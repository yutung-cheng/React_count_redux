import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedNumber,
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync,
  reset,
} from "../../redux/slicers/count_slicer";

export default function Count() {
  const state = useSelector((state) => state.count);
  const perpletate = useSelector((state) => state.perple);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter Component</h1>
      <h3>
        Current total: {state.value}. Total person in the list:{" "}
        {perpletate.length}
      </h3>
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
      <button
        onClick={() => dispatch(incrementAsync(state.selectedNumber, 1000))}
      >
        Increment Async
      </button>
      &nbsp;
      <button onClick={() => dispatch(reset())}>Reset</button> &nbsp;
    </div>
  );
}

import React, { useState } from "react";

export default function Count() {
  const [total, setTotal] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(1); //default value is 1

  //Handle selected number.
  function handleChange(e) {
    setSelectedNumber(Number(e.target.value));
  }

  // Increment
  function increment() {
    setTotal(total + selectedNumber);
  }

  // Decrement
  const decrement = () => {
    setTotal(total - selectedNumber);
  };

  // Increment if it's odd number
  const incrementIfOdd = () => {
    if (total & 1) {
      setTotal(total + selectedNumber);
    }
  };

  // Increment if async
  const incrementAsync = () => {
    setTimeout(() => {
      setTotal(total + selectedNumber);
    }, 500);
  };

  function reset() {
    setTotal(0);
    setSelectedNumber(1);
  }

  return (
    <div>
      <h1>Current total: {total}</h1>
      <select value={selectedNumber} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      &nbsp; &nbsp;
      <button onClick={increment}> + </button> &nbsp;
      <button onClick={decrement}> - </button> &nbsp;
      <button onClick={incrementIfOdd}>Increment Odd</button> &nbsp;
      <button onClick={incrementAsync}>Increment Async</button> &nbsp;
      <button onClick={reset}>Reset</button> &nbsp;
    </div>
  );
}

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addPerson } from "../../redux/slicers/person_slicer";

export default function Person() {
  const personState = useSelector((state) => state.persons);
  const countState = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const personObj = { id: nanoid(), name, age };

  const clearInputData = () => {
    setName("");
    setAge("");
  };

  return (
    <div>
      <h1> Person Component </h1>
      <input
        placeholder="Enter Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      &nbsp;
      <input
        placeholder="Enter Age"
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      &nbsp;
      <button
        onClick={() => {
          dispatch(addPerson(personObj));
          clearInputData();
        }}
      >
        Add Person
      </button>
      &nbsp;
      <ul>
        {personState.map((personObj) => (
          <li key={personObj.id}>
            name: {personObj.name} -- age: {personObj.age}
          </li>
        ))}
      </ul>
      <h3>{countState.value}</h3>
    </div>
  );
}

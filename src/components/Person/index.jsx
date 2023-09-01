import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addPerson } from "../../redux/slicers/person_slicer";

export default function Person() {
  const peopletate = useSelector((state) => state.people);
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
        {peopletate.map((personObj) => (
          <li key={personObj.id}>
            Name: {personObj.name} -- Age: {personObj.age}
          </li>
        ))}
      </ul>
      <h3>{countState.value}</h3>
    </div>
  );
}

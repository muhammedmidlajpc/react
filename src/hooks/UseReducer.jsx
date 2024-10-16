import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      if ((state) => 0) {
        return state - 1;
      }
    case "incBy5":
      return state + 5;
    case "incByAmount":
      return state + action.payload;

    default:
      return state;
  }
}
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>inc</button>
      <button onClick={() => dispatch({ type: "dec" })}>dec</button>
      <button onClick={() => dispatch({ type: "incBy5" })}>incBy5</button>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button
        onClick={() => dispatch({ type: "incByAmount", payload: number })}
      >
        incByAmount
      </button>
    </div>
  );
};

export default UseReducer;

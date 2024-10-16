import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incByAmount } from "../redux/counterslice";
const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input
        type="number"
        onChange={(e) => setNumber(Number(e.target.value))}
        value={number}
      />
      <button onClick={() => dispatch(incByAmount(number))}>IncBtAmount</button>
    </div>
  );
};

export default Counter;

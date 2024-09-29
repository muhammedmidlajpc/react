import React, { useState } from "react";

const Counter = () => {
  const [counter, setcounter] = useState(0);
  const increment = () => {
    setcounter(counter + 1);
  };
  const decrement = () => {
    if (counter === 0) {
      return;
    }
    setcounter(counter - 1);
  };
  return (
    <div>
      <div className="count">{counter}</div>
      <div className="btns">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;

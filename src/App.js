import React, { useState } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <div className="counter-value">{count}</div>
      <div className="counter-controls">
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={increaseCount}>Increase</button>
      </div>
    </div>
  );
};

export default Counter;

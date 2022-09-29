import React, { useState } from "react";

const Counter = () => {
  const [counterNumber, setCounterNumber] = useState(0);

  const onHandleDecrement = () => {
    setCounterNumber(counterNumber - 1);
  };

  const onHandleIncrement = () => {
    setCounterNumber(counterNumber + 1);
  };
  return (
    <div>
      <button onClick={onHandleDecrement}>-</button>
      <span>{counterNumber}</span>
      <button onClick={onHandleIncrement}>+</button>
    </div>
  );
};

export default Counter;

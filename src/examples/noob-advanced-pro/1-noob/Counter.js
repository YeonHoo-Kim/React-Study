import React, { useState } from 'react';

const Counter = ({ initialCount }) => {
  let [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    count = count + 1;
    console.log(count);
  };

  const decrementCount = () => {
    count = count - 1;
    console.log(count);
  };

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default Counter;

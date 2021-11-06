import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decrementCount = () => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      {count}
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

Counter.propTypes = {
  initialCount: PropTypes.number,
};

export default Counter;

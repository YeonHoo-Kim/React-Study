import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount((curCount) => curCount + 1);
  };

  const decrementCount = () => {
    setCount((curCount) => curCount - 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

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

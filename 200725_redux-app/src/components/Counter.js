import React from 'react';

const Counter = ({ number, onIncrease, onDcrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDcrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;

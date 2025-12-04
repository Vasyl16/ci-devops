import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="counter-display" data-testid="counter-value">
        {count}
      </div>
      <div className="counter-buttons">
        <button onClick={decrement} data-testid="decrement-btn">
          -
        </button>
        <button onClick={reset} data-testid="reset-btn">
          Reset
        </button>
        <button onClick={increment} data-testid="increment-btn">
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;

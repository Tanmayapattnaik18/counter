import React, { useState } from 'react';
import './App.css';

function App() {
  const Counter = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
      setCount(count + 1);
    };

    const handleDecrement = () => {
      setCount(count - 1);
    };

    return (
      <div className="counter">
        <h2>Counter</h2>
        <div className="counter-container">
          <button onClick={handleDecrement}>Decrease</button>
          <span className="count">{count}</span>
          <button onClick={handleIncrement}>Increase</button>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <h1>Vite React Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;

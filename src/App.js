import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState({
    value: 1,
    id: 123456,
  });
  const handleIncrement = () => {
    setCounter((prevState) => {
      return { ...prevState, value: prevState.value + 1 };
    });
  };
  const handleDecrement = () => {
    setCounter((prevState) => {
      return { ...prevState, value: prevState.value - 1 };
    });
  };
  return (
    <div>
      <p>{counter.value}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>{JSON.stringify(counter)}</div>
    </div>
  );
}

export default App;

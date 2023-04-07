import { useState } from "react";
import "./styles.css";

function Counter() {
  // we have to declare a state to update the value of count
  // state is array with initial value and setter function
  let [count, setCount] = useState(0); // inside use state we write the initial value

  let [factor, setFactor] = useState(1);

  const increase = () => {
    //count = count +factor;
    setCount(count + factor);
  };
  const decrease = () => {
    //count = count -factor;
    setCount(count - factor);
  };

  const reset = () => {
    setCount((count = 0));
  };

  const handlefactor = (factor) => {
    if (factor) {
      setFactor(factor);
    } else setFactor(1);
  };

  return (
    <div className="App">
      <h1> The counter App </h1>

      <h1> {count} </h1>
      <div>
        <h2> By what factor you want to increment and decrement </h2>

        <input
          type="number"
          value={factor}
          onChange={(e) => handlefactor(e.target.valueAsNumber)}
        />
      </div>

      <div> &nbsp; &nbsp;</div>

      <div>
        <button onClick={increase}> Increment </button>
        &nbsp; &nbsp;
        <button onClick={decrease}> Decrement </button>
        &nbsp; &nbsp;
        <button onClick={reset}> Reset </button>
      </div>
    </div>
  );
}

export default Counter;

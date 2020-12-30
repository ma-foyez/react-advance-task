import React, { useState  } from "react";
import { useDispatch } from "react-redux";

const TestCounterHit = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h2>
        <button onClick={() => dispatch({ type: "INC" })}>+</button>
        <button onClick={() => dispatch({ type: "DEC" })}>-</button> <br />
        <input value={number} onChange={(e) => setNumber(e.target.value)} />
        <br />
        <button onClick={() => dispatch({ type: "UPDATE", payload: number })}>
          Update
        </button>{" "}
        <button onClick={() => dispatch({ type: "INC", payload: number })}>
          Inc Specific Value
        </button>{" "}
        <br />
      </h2>
    </div>
  );
};

export default TestCounterHit;

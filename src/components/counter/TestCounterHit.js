import React, { useState  } from "react";
import { useDispatch, useSelector } from "react-redux";

const TestCounterHit = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  const counter = useSelector((state) => state.CounterReducer.counter);

  return (
    <div className="card card-body text-center p-4">
      <h2>Counter App Demo</h2>
      <div>
        <button onClick={() => dispatch({ type: "INC" })}>+</button>
        { counter }
        <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      </div>
      <br />
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <br />
      <div>
        <button onClick={() => dispatch({ type: "UPDATE", payload: number })}>
          Update
        </button>{" "}
        <button onClick={() => dispatch({ type: "INC", payload: number })}>
          Inc Specific Value
        </button>{" "}
      </div>
      <br />
    </div>
  );
};

export default TestCounterHit;

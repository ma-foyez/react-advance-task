import React from "react";
import { useDispatch } from "react-redux";

const TestCounterHit = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>
        <button onClick={() => dispatch({ type: "INC" })}>+</button>
        <button onClick={() => dispatch({ type: "DEC" })}>-</button>{" "}
      </h2>
    </div>
  );
};

export default TestCounterHit;

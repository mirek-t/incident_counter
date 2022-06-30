import React from "react";
import { useCounter } from "./useCounter";

function Counter() {
  const incident = "Incident";

  const { count, increment, decrement, set } = useCounter();

  return (
    <div>
      <h1>Days since last {incident}</h1>
      <p>{count}</p>

      <section>
        <button
          onClick={() => {
            increment();
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            decrement();
          }}
        >
          Decement
        </button>
        <button
          onClick={() => {
            set(0);
          }}
        >
          Reset
        </button>
      </section>
    </div>
  );
}

export default Counter;

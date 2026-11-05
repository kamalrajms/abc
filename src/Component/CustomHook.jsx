import React from "react";
import useCount from "./useCount";

export default function CustomHook() {
  const { count, incerement, decrement, reset } = useCount(7);
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={incerement}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

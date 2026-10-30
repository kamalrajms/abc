import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const page = useNavigate();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 10) {
      page("/Contact");
    }
  }, [count]);
  return (
    <div>
      <h2>About Component</h2>
      <h2>count:{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        incerement
      </button>
      <br></br>
      <button
        onClick={() => {
          page("/Contact");
        }}
      >
        move to contat
      </button>
    </div>
  );
}

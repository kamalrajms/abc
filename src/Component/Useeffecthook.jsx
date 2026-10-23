import React, { useEffect, useState } from "react";

export default function Useeffecthook() {
  const [count, setCount] = useState(3);
  const [num, setNum] = useState(7);

  useEffect(() => {
    console.log("component mounted");
  }, [count]);

  useEffect(() => {
    console.log(`count change to : ${count}--${num}`);
  }, [count,num]);

  return (
    <div>
      <h2>UseEffect hook</h2>
      <h2>
        count:{count} --- {num}
      </h2>
      <button onClick={() => setCount(count + 1)}>incerement</button>
      <button onClick={() => setNum(num - 1)}>decrement</button>
    </div>
  );
}

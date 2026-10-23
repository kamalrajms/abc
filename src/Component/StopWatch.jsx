import React, { useEffect, useState } from "react";

export default function StopWatch() {
  const [sec, setSec] = useState(0);
  const [Running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (Running) {
      intervalId = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 500);
    }
    return () => clearInterval(intervalId);
  }, [Running])
  const handleStart=()=>{
    setRunning(true)
  }
//   console.log(Running);
  const handleStop=()=>{
    setRunning(false)
  }
  const handleReset=()=>{
    setSec(0)
    setRunning(false)
  }
  return (
    <div>
      <h2>timer: {sec}</h2>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

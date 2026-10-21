import React, { useState } from "react";

export default function DarkMode() {
  const [darMode, setDarkMode] = useState(false);
  console.log(darMode);

  return (
    <div
      style={{
        backgroundColor: darMode ? "#333" : "#fff",
        color: darMode ? "#fff" : "#333",
        padding: "30px",
      }}
    >
      <button onClick={() => setDarkMode(!darMode)}>
        switch to {darMode ? "light" : "dark"} mode
      </button>
      <h3>you are in {darMode ? "dark" : "light"} mode</h3>
    </div>
  );
}


// !true===false
// !false===true
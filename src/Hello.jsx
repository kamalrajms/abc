import React from "react";

export default function Hello(props) {
  return (
    <div className="hello">
      <h2>
        Hello!!!!!!!!!1 {props.native}--{props.name}
      </h2>
    </div>
  );
}

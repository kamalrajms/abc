import React from "react";
import "./Destructure.css";

export default function DestructuringProps({ name, city, num }) {
  return (
    <div className="destructure">
      <h2>name:{name}</h2>
      <h2>City:{city}</h2>
      <h2>phone number:{num}</h2>
    </div>
  );
}

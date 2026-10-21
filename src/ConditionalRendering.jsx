import React from "react";
import Style from "./Condition.module.css"

export default function ConditionalRendering() {
  const user = true;
  return (
    <div className={Style.condition}>
      <h2>Conditional rendering</h2>
      <h2>ternary operator</h2>
      {user ? <h3>welcome back....!!!!</h3> : <h3>Please login...!</h3>}
      <h2>Logical operator</h2>
      {user && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vitae
          facere assumenda laboriosam et cumque id a omnis nostrum? Odio enim
          veritatis tempore in repellendus aperiam necessitatibus dicta! Nihil,
          maiores.
        </p>
      )}
    </div>
  );
}

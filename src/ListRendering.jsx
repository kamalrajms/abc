import React from "react";

export default function ListRendering() {
  const fruits = ["apple", "banana", "mango"];

  const user = [
    { id: 1, name: "kamal" },
    { id: 2, name: "surya" },
    { id: 3, name: "hari" },
  ];
  return (
    <div>
      <h2>list rendering</h2>
      <h2>fruits data</h2>
      {fruits.map((name, ind) => (
        <h3 key={ind}>{name}</h3>
      ))}
      <h2>User data</h2>
      {user.map((person) => (
        // person={id: 1, name: "kamal"}
        <div key={person.id}>
          <h2>name:{person.name}</h2>
          <h2>ID:{person.id}</h2>
        </div>
      ))}
    </div>
  );
}

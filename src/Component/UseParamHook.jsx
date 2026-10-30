import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UseParamHook() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      <h2>useParam hook</h2>
      {user.map((person) => (
        <div key={person.id}>
          <Link to={`/Blogs/:${person.id}/:${person.name}`}>{person.name}</Link>
        </div>
      ))}
    </div>
  );
}

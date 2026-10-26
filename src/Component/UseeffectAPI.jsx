import React, { useEffect, useState } from "react";

export default function UseeffectAPI() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch,axios
    fetch("https://jsonplaceholder.typicode.com/users")
      // api =[{1},{2},{3},{4}....{10}]    json & raw data
      .then((res) => res.json())
      // api =[{1},{2},{3},{4}....{10}]   obj
      .then((data) => {
        setUser(data);
        setLoading(true);
      });
  }, []);
  console.log(user);

  return (
    <div>
      <h2>user data from API</h2>
      {/* // user =[{id:1},{id:2},{id:3},{4}....{10}]   obj */}

      {loading ? (
        <div>
          {user.map((person) => (
            // person ={id :1}
            <div key={person.id}>
              <h3>name:{person.name}</h3>
              <h3>email:{person.email}</h3>
              <h3>id:{person.id}</h3>
            </div>
          ))}
        </div>
      ) : (
        <h1>loading.........!!!!!!</h1>
      )}
    </div>
  );
}

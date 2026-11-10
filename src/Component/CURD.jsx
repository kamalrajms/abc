import React, { useEffect, useState } from "react";

export default function CURD() {
  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const addItem = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (name && email) {
      console.log("hello");

      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
        }),
        headers: {
          "content-Type": "application/json;charset=UTF-8",
        },
      })
        .then((res) => res.json())
        //   res={name:"getghetg",email:"sdfrg"}.    // res
        .then((person) => {
          const newUser = { ...person, id: data.length + 1 };
          //   res={name:"getghetg",email:"sdfrg",id:11}.    // res
          setData([...data, newUser]);
          setName("");
          setEmail("");
        });
    }
  };

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      // res={9}
      .then((person) => {
        // data=[{id:1},{id:"2"}.. .]
        setData((data) => {
          // user={id:1}
          return data.filter((user) => user.id !== id);
        });
      });
  };
  return (
    <div>
      <h2>user data</h2>
      <table>
        <thead>
          <tr>
            <td>s.no</td>
            <td>name</td>
            <td>email</td>
            <td>option</td>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>
                <button onClick={() => handleDelete(person.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
            <td>
              <button onClick={addItem}>update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

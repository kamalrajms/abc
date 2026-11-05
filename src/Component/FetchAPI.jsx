import React, { useEffect, useState } from "react";

export default function FetchAPI() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Failed to fech the datas");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  if (loading) return <h2>loading......1!!!!!!1111</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
  return (
    <div>
      <h2>useer data</h2>
      {user.map((person) => (
        <div key={person.id}>
          <h4>{person.name}</h4>
          <h4>{person.email}</h4>
        </div>
      ))}
    </div>
  );
}

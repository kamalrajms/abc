import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAxiosApi from "../Component/useAxiosApi";

export default function Service() {
  const {
    user: data,
    error,
    loading,
  } = useAxiosApi("https://jsonplaceholder.typicode.com/users");

  if (loading) return <h2>loading......dfghjkhjghfhhjjhjgfghjnhbgv!!!!!!</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
  return (
    <div>
      <h2>Service component</h2>
      {data.map((person) => (
        <div
          key={person.id}
          style={{ border: "2px solid #333", padding: "20px" }}
        >
          <h3>name:{person.name}</h3>
          <h3>email:{person.email}</h3>
        </div>
      ))}

      <div className="sub-header">
        <Link to={"WebApp"}>WebApp</Link>
        <Link to={"AppApp"}>AppApp</Link>
      </div>
      <Outlet />
    </div>
  );
}

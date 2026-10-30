import React from "react";
import { useParams } from "react-router-dom";

export default function Blogs() {
  const { id, name } = useParams();
  return (
    <div>
      <h2>Blogs detailes</h2>
      <h2>id:{id}</h2>
      <h2>name :{name}</h2>
    </div>
  );
}

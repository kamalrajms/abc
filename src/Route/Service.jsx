import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div>
      <h2>Service component</h2>
      <div className="sub-header">
        <Link to={""}>WebApp</Link>
        <Link to={"AppApp"}>AppApp</Link>
      </div>
      <Outlet />
    </div>
  );
}

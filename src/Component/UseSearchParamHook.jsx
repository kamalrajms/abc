import React from "react";
import { useSearchParams } from "react-router-dom";

export default function UseSearchParamHook() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = () => {
    setSearchParams({ category: "lap", price: "50000" });
  };
  return (
    <div>
      <h2>UseSearchParamHook</h2>
      <button onClick={handleClick}>change filter</button>
    </div>
  );
}

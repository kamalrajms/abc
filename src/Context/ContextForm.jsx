import React from "react";
import ContextField from "./ContextField";
import { Pass } from "../App";
import { useContext } from "react";

export default function ContextForm() {
  const { theme } = useContext(Pass);
  return (
    <div className={theme}>
      <h2>Context form</h2>
      <ContextField />
    </div>
  );
}

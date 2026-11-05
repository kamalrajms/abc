import React from "react";
import Page from "../Component/Page";
import FetchAPI from "../Component/FetchAPI";

export default function Home() {
  return (
    <div>
      <h2>Home component</h2>
      <FetchAPI />
      <Page />
    </div>
  );
}

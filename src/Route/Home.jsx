import React from "react";
import Page from "../Component/Page";
import FetchAPI from "../Component/FetchAPI";
import CURD from "../Component/CURD";

export default function Home() {
  return (
    <div>
      <h2>Home component</h2>
      <CURD />
      <FetchAPI />
      <Page />
    </div>
  );
}

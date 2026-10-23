import React from "react";
import Kamal from "./Greeting";
import Hello from "./Hello";
import DestructuringProps from "./DestructuringProps";
import ConditionalRendering from "./ConditionalRendering";
import ListRendering from "./ListRendering";
import ObjectStyle from "./ObjectStyle";
import UseStateHook from "./Component/UseStateHook";
import DarkMode from "./Component/DarkMode";
import Feilds from "./Component/Fields";
import Regform from "./Component/Regform";
import ConditionalForm from "./Component/ConditionalForm";
import Useeffecthook from "./Component/Useeffecthook";
import Sec from "./Component/Sec";
import StopWatch from "./Component/StopWatch";

export default function App() {
  console.log("App component rendered");

  const name = "AK";
  const city = "chennai";
  const num = "123456";
  const name2 = "hari";
  const city2 = "madurai";
  const num2 = "123456456789";
  const name3 = "rahul";
  const city3 = "namakkal";
  const num3 = "1234560987656789";

  return (
    <div>
      <StopWatch />
      <Sec />
      <Useeffecthook />
      <ConditionalForm />
      <Regform />
      <Feilds />
      <DarkMode />
      <UseStateHook />
      <ObjectStyle />
      <ListRendering />
      <ConditionalRendering />
      <DestructuringProps name={name} city={city} num={num} ph={"tegyfhbe"} />
      <DestructuringProps name={name2} city={city2} num={num2} />
      <DestructuringProps name={name3} city={city3} num={num3} />
      <h2 style={{ padding: "20px", color: "yellow", backgroundColor: "red" }}>
        hello world
      </h2>
      <p>lorem ipsum olor sit amet</p>
      <Kamal />
      <Hello />
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo id qui
        nulla incidunt, quis facere ut iste itaque quisquam soluta cupiditate ea
        accusamus quam consequuntur in esse dignissimos ducimus voluptatum?
      </h1>
    </div>
  );
}

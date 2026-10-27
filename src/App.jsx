import React, { createContext, useState } from "react";
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
import UseeffectAPI from "./Component/UseeffectAPI";
import UseRefHook from "./Component/UseRefHook";
import First from "./Context/First";
import ContextForm from "./Context/ContextForm";

export const Pass = createContext();

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

  const [theme, setTheme] = useState("light");
  const data = { name: "react.js" };

  return (
    <div>
      <div style={{ padding: "20px", border: "2px solid  #333" }}>
        <Pass.Provider value={{theme,setTheme,data}}>
          <ContextForm />
        </Pass.Provider>
      </div>
      <div style={{ padding: "20px", border: "2px solid  #333" }}>
        <h2>app component {name}</h2>
        <Pass.Provider value={name}>
          <First />
        </Pass.Provider>
      </div>
      <UseRefHook />
      <UseeffectAPI />
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

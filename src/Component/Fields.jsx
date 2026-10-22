import React, { useState } from "react";

export default function Feilds() {
  const [name, setName] = useState("");
  console.log(name);
  const [checkBox, setCheckBox] = useState(true);
  console.log(checkBox);

  return (
    <div>
      <h2>Field</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>{name}</h2>

      {/* <select name="" id="">
        <option value="apple">apple</option>
        <option value="grapes">orange</option>
      </select> */}

      <label htmlFor="">check box</label>
      <input
        type="checkbox"
        checked={checkBox}
        onChange={(e) => setCheckBox(e.target.checked)}
      />
    </div>
  );
}

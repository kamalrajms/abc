import React, { useReducer } from "react";

export default function ReducerForm() {
  const initialValue = {
    name: "",
    email: "",
    password: "",
  };

  function formReducer(state, action) {
    // action ={field:name,value:"gsvdchdsbfjjskfb"}
    return {
      ...state,
      [action.field]: action.value,
    };
  }
  const [state, dispatch] = useReducer(formReducer, initialValue);
  function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  }
  return (
    <div>
      <h2>Register form</h2>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder=""
      />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder=""
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handleChange}
        placeholder=""
      />
    </div>
  );
}

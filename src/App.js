import React from "react";
import ReducerDemo from "./hook/useReducer/ReducerDemo";
import Example from "./Example/Example";
import CountContexts from "./CountContext/CountContext";
import FormDemo from "./components/FormDemo";

function App() {
  return (
    <div>
      <FormDemo />
      <hr />
      <CountContexts />
      <hr />
      <ReducerDemo />
      <hr />
      <Example />
      <hr />
    </div>
  );
}

export default App;

import React, { createContext } from "react";
import FormList from "./FormList";

export const FormDemoContext = createContext();

export default function FormDemo() {
  let state = {
    account: "123",
    password: "1",
  };

  return (
    <div>
      <FormDemoContext.Provider value={{ ...state }}>
        <FormList />
      </FormDemoContext.Provider>
    </div>
  );
}

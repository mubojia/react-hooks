import React, { createContext, useReducer } from "react";
import Reducer from "../reducer";
import FormListInputAcc from "./FormListInputAcc";
import FormListInputpass from "./FormListInputpass";
import FormListButton from "./FormListButton";

export const FormDemoContext = createContext();

export default function FormDemo() {
  const [account, dispatch1] = useReducer(Reducer.fromDemoInputReducer, "123");
  const [password, dispatch2] = useReducer(Reducer.fromDemoInputReducer, "111");

  return (
    <div>
      <FormDemoContext.Provider
        value={{ account, password, dispatch1, dispatch2 }}
      >
        <FormListInputAcc />
        <FormListInputpass />
        <FormListButton />
      </FormDemoContext.Provider>
    </div>
  );
}

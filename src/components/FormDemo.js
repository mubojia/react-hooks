import React, { createContext, useReducer, useCallback } from "react";
import Reducer from "../reducer";
import FormListInputAcc from "./FormListInputAcc";
import FormListInputpass from "./FormListInputpass";
import FormListButton from "./FormListButton";

export const FormDemoContext = createContext();

const init = {
  account: "",
  password: "",
};

export default function FormDemo() {
  const [state, dispatch] = useReducer(Reducer.fromDemoInputReducer, init);

  console.log("最外层组建", state);

  return (
    <div>
      <FormDemoContext.Provider value={{ state, dispatch }}>
        <FormListInputAcc />
        <FormListInputpass />
        <FormListButton />
      </FormDemoContext.Provider>
    </div>
  );
}

import React, { createContext, useReducer } from "react";
import Reducer from "../reducer";

export const ColorContext = createContext({});

export const UPDATE_COLOR = "UPDATE_COLOR";

export const Color = (props) => {
  const [color, dispatch] = useReducer(Reducer.colorsReducer, "blue");
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  );
};

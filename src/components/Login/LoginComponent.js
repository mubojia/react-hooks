import React, { createContext, useReducer } from "react";
import Reducer from "../../reducer";
import Header from "./Header";
import Loigin from "./Login";
import Home from "./Home";

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export const LoginComponent = () => {
  const [state, dispatch] = useReducer(Reducer.loginReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Header />
      <div className="lLoginComponent">
        {!state.isAuthenticated ? <Loigin /> : <Home />}
      </div>
    </AuthContext.Provider>
  );
};
export default LoginComponent;

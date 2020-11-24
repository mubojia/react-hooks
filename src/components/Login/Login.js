import React, { useState, useContext } from "react";
import { AuthContext } from "./LoginComponent";

export const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = useState(initialState);

  const handleInputChage = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // https://www.fastmock.site/#/
    fetch(
      "https://www.fastmock.site/mock/0ba07830bafb654a2b1d9a74be14aa1c/login/api/login",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.email,
          password: data.password,
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((resJson) => {
        dispatch({
          type: "LOGIN",
          payload: resJson,
        });
      })
      .catch((error) => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.message || error.statusText,
        });
      });
  };

  return (
    <div className="login-container">
      <div className="card">
        <div className="container">
          <form>
            <h1>Login</h1>
            <label htmlFor="email">
              Email Address
              <input
                type="text"
                value={data.email}
                onChange={handleInputChage}
                name="email"
                id="email"
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                value={data.password}
                onChange={handleInputChage}
                name="password"
                id="password"
              />
            </label>

            <button disabled={data.isSubmitting}>
              {data.isSubmitting ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;

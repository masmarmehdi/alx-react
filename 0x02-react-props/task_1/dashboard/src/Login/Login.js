import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <label for="email">Email:</label>
      <input type="email" name="email" />
      <label for="password">Password:</label>
      <input type="password" name="password" />
      <button>OK</button>
    </div>
  );
}

export default Login;

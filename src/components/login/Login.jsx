import React, { useState } from "react";
import "./Login.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add login logic here, for example, calling an authentication API
    console.log(
      "Logging in with username:",
      username,
      "and password:",
      password
    );
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGoogleLogin}>
        <FaGoogle /> Login with Google
      </button>
      <button onClick={handleFacebookLogin}>
        <FaFacebook /> Login with Facebook
      </button>
      <div>
        <a href="#" onClick={handleForgotPassword}>
          Forgot password?
        </a>
      </div>
      <div>
        <button onClick={handleRegisterNow}>
          Don't have an account yet? Register now
        </button>
      </div>
    </div>
  );
};

export default Login;

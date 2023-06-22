import "./Login.css";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";
import { userInfoStore } from "../../../../../store/userInfoStore";
import jwtDecode from "jwt-decode";

const Login = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const reset = () => {
    setUsername("");
    setPassword("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
      email,
    };

    setIsLoading(true);

    axios
      .post("http://localhost:3000/api/login", data)
      .then((response) => {
        setResponseMessage(response.data.message);
        const newToken = response.data.token;
        localStorage.setItem("token", newToken);
        reset();
        setIsLoading(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="login__container">
      <div className="loginElements__container">
        <span className="login__title">Member Login</span>

        {/* ---------User or Email--------- */}

        <div className="individualInput__container">
          <input
            type="text"
            placeholder="User or Email"
            className="login__email-input"
            autoComplete="username"
            onChange={(e) => {
              const value = e.target.value.trim();
              if (value.includes("@")) {
                setEmail(value);
              } else {
                setUsername(value);
              }
            }}
          />
          {responseMessage ? (
            <span className="userTextError">{responseMessage}</span>
          ) : null}
        </div>
        {/* ---------password--------- */}
        <div>
          <input
            type="password"
            placeholder="Password"
            className="login__password-input"
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        {/* ---------boton--------- */}

        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <button className="boton" onClick={handleSubmit}>
            Sign in
          </button>
        </motion.div>

        <div className="login__check-container">
          <span className="check__text">Remember</span>
          <button className="forgotPassword">Forgot password?</button>
        </div>
        <button className="registerHere">Register Here!</button>
      </div>
    </div>
  );
};

export default Login;

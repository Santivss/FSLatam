import "./Login.css";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";
import { userInfoStore } from "../../../../../store/userInfoStore";
import jwtDecode from "jwt-decode";

const Login = () => {
  const [token, setToken] = useState(null);
  if (token) {
    const newToken = jwtDecode(token);
    console.log(newToken);
  }

  const [responseMessage, setResponseMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
      email,
    };

    axios
      .post("http://localhost:3000/api/login", data)
      .then((response) => {
        const token = response.data.token;

        if (token) {
          localStorage.setItem("token", token);
          setToken(token);

          /* window.location.reload(); */
        } else {
          setResponseMessage(response.data.message);
        }
      })
      .catch((err) => console.log(err.message));
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
          <input type="checkbox" className="checkbox__element" />
          <span className="check__text">Remember</span>
          <button className="forgotPassword">Forgot password?</button>
        </div>
        <button className="registerHere">Register Here!</button>
      </div>
    </div>
  );
};

export default Login;

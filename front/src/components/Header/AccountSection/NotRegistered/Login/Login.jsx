import "./Login.css";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";

const Login = () => {
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
        localStorage.setItem("SantiToken", token);
        window.location.reload();
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          setResponseMessage(error.response.data);
        } else {
          setResponseMessage("Error en la solicitud");
        }
      });
  };

  return (
    <div className="login__container">
      <div className="loginElements__container">
        <span className="login__title">Member Login</span>

        {/* ---------User or Email--------- */}
        <div className="">
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
          <span className="userTextError">Mensaje</span>
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

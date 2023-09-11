import "./Login.css";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";
import loading_icon from "../../../../../assets/uiIcons/loading_icon.svg";
import ToggleComponent from "../../../../../utils/ToggleComponent";
import SignIn from "../SignIn/SignIn";

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
      .post("https://fslatam-back.onrender.com/api/login", data)
      .then((response) => {
        setResponseMessage(response.data.message);
        const newToken = response.data.token;
        if (newToken) {
          localStorage.setItem("token", newToken);
        }
        setIsLoading(false);
        setTimeout(() => {
          setResponseMessage(false);
        }, 1500);

        if (response.data.message === "Los datos se validaron correctamente") {
          reset();
          window.location.reload();
        }
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
          {responseMessage === "Usuario no encontrado" ? (
            <span className="userTextError">{responseMessage}</span>
          ) : (
            <span className="userTextError"></span>
          )}
        </div>
        {/* ---------password--------- */}
        <div className="loginPass__container">
          <input
            type="password"
            placeholder="Password"
            className="login__password-input"
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {responseMessage === "La contraseña es incorrecta" ? (
            <span className="userTextError">{responseMessage}</span>
          ) : (
            <span className="userTextError"></span>
          )}
        </div>

        {/* ---------boton--------- */}

        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <button className="boton" onClick={handleSubmit}>
            {isLoading ? (
              <img
                src={loading_icon}
                alt="loading_icon"
                className="loginPass__loadingIcon"
              />
            ) : (
              "Sign in"
            )}
          </button>
        </motion.div>

        <span className="forgotPassword">Forgot password?</span>
      </div>
    </div>
  );
};

export default Login;

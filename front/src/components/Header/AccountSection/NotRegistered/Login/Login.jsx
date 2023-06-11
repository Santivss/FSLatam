import "./Login.css";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="login__container">
      <div className="loginElements__container">
        <span className="login__title">Member Login</span>
        <input
          type="text"
          placeholder="User or Email"
          className="login__email-input"
        />
        <input
          type="password"
          placeholder="Password"
          className="login__password-input"
        />
        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <button className="boton">Sign in</button>
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

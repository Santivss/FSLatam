import "./SignIn.css";
import { motion } from "framer-motion";

const signIn = () => {
  return (
    <div className="signIn__container">
      <div className="signInElements__container">
        <span className="signIn__title">Register</span>
        <input type="text" placeholder="Full name" className="signIn__input" />

        <input type="text" placeholder="User name" className="signIn__input" />

        <input type="email" placeholder="Email" className="signIn__input" />

        <input
          type="password"
          placeholder="Password"
          className="signIn__input"
        />

        <input
          type="password"
          placeholder="Confirm password"
          className="signIn__input"
        />

        <motion.div
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <button className="boton">Sign in</button>
        </motion.div>
      </div>
    </div>
  );
};

export default signIn;

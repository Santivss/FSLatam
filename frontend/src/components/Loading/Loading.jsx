import React from "react";
import { motion } from "framer-motion";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="icon-container">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          repeat: 1,
          repeatType: "reverse",
          repeatDelay: 1,
          duration: 1,
        }}
        className="test__container"
      >
        {/* <img src={fc_icon} alt="" className="fc_icon" /> */}
        <span className="welcome">FarmersClub FarmersClub</span>
      </motion.div>
    </div>
  );
};

export default Loading;

/* 



*/

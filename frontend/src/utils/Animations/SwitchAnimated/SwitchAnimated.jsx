import { useState } from "react";
import "./SwitchAnimated.css";
import { motion } from "framer-motion";

export const SwitchAnimated = ({ onSwitchChange }) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
    onSwitchChange(!isOn);
  };

  const spring = {
    type: "spring",
    stiffness: 900,
    damping: 30,
  };

  return (
    <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
      <motion.div
        className="handle"
        data-ison={isOn}
        layout
        transition={spring}
      />
    </div>
  );
};

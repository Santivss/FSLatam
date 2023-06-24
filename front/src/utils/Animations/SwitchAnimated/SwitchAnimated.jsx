import { useState } from "react";
import "./SwitchAnimated.css";
import { motion } from "framer-motion";
import { useIconsStore } from "../../../store/ui_icons_store";

export const SwitchAnimated = ({ onSwitchChange }) => {
  const { ui_icons } = useIconsStore();

  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
    onSwitchChange(!isOn);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
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

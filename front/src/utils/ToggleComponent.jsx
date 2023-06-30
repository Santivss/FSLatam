import React, { useState, useEffect, useRef } from "react";
import Portal from "./Portal";
import { motion } from "framer-motion";
import { BoxAnimation } from "./Animations/BoxAnimatonConfig";

const ToggleComponent = ({ children, buttonText }) => {
  const [showComponent, setShowComponent] = useState(false);
  const containerRef = useRef(null);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setShowComponent(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleToggle = () => {
    setShowComponent((prevState) => !prevState);
  };

  return (
    <div ref={containerRef}>
      <button onClick={handleToggle}>{buttonText}</button>
      {showComponent && (
        <Portal>
          <motion.div ref={componentRef} {...BoxAnimation}>
            {children}
          </motion.div>
        </Portal>
      )}
    </div>
  );
};

export default ToggleComponent;

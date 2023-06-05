import ReactDOM from "react-dom";
import React, { useState, useEffect, useRef } from "react";

const Portal = ({ children }) => {
  const [hasContent, setHasContent] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setHasContent(React.Children.count(children) > 0);
  }, [children]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.pointerEvents = hasContent ? "auto" : "none";
    }
  }, [hasContent]);

  return ReactDOM.createPortal(
    <div
      id="portal-root"
      className={`portal__root${hasContent ? " has-content" : ""}`}
      ref={containerRef}
    >
      {children}
    </div>,
    document.getElementById("portal-root")
  );
};

export default Portal;

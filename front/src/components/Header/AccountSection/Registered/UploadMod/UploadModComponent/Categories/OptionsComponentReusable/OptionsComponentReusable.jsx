import "./OptionsComponentReusable.css";
import { useIconsStore } from "../../../../../../../../store/ui_icons_store";
import { useState } from "react";

const OptionsComponentReusable = () => {
  const { ui_icons } = useIconsStore();
  const [optionsContainerState, setOptionsContainerState] = useState(false);

  const data = {
    text: "Categories",
  };

  const toggleOptionsContainer = () => {
    setOptionsContainerState(!optionsContainerState);
  };

  return (
    <div className="optionsComponentReusable__container">
      <div
        onClick={toggleOptionsContainer}
        className="optionsTitleAndIcon__container"
      >
        <span>{data.text}</span>
        <img
          src={ui_icons.triangle_icon}
          alt={ui_icons.triangle_icon}
          className={`optionsComponentReusable__triangle-icon ${
            optionsContainerState
              ? "optionsComponentReusable__triangle-active"
              : ""
          }`}
        />
      </div>
      <div
        className={`optionsComponentReusable__dropDown-container ${
          optionsContainerState ? "optionsComponent__toggle" : ""
        }`}
      >
        <span>Tractors</span>
        <span>Harvesters</span>
        <span>Vehicles</span>
      </div>
    </div>
  );
};

export default OptionsComponentReusable;

import "./FiltersSection.css";
import { icons } from "../../../../assets/uiIcons/index";
import { useState } from "react";

const FiltersSection = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="filters__sections">
      {icons
        .filter((icon) => ["Trending", "New", "Top"].includes(icon.title))
        .map((icon, index) => (
          <button
            key={index}
            className={`button_filter ${
              activeButton === index ? "active__button-filter" : ""
            }`}
            onClick={() => handleButtonClick(index)}
          >
            <img
              src={activeButton === index ? icon.icon_color : icon.icon}
              alt=""
              className="icon__filters-section"
            />
            <span>{icon.title}</span>
          </button>
        ))}
    </div>
  );
};

export default FiltersSection;

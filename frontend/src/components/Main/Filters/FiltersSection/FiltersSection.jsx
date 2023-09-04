import "./FiltersSection.css";
import { useState } from "react";
import trending_icon from "../../../../assets/uiIcons/trending_icon.svg";
import trending_icon_amarillo from "../../../../assets/uiIcons/trending_icon_amarillo.svg";
import new_icon from "../../../../assets/uiIcons/new_icon.svg";
import new_icon_amarillo from "../../../../assets/uiIcons/new_icon_amarillo.svg";
import top_icon from "../../../../assets/uiIcons/top_icon.svg";
import top_icon_amarillo from "../../../../assets/uiIcons/top_icon_amarillo.svg";
import { categoriesDataFilteredStore } from "../../../../store/categoriesDataFilteredStore";

const FiltersSection = () => {
  const { setTypesFiltered } = categoriesDataFilteredStore();

  const icons = [
    {
      title: "Trending",
      icon: trending_icon,
      icon_color: trending_icon_amarillo,
    },
    {
      title: "New",
      icon: new_icon,
      icon_color: new_icon_amarillo,
    },
    {
      title: "Top",
      icon: top_icon,
      icon_color: top_icon_amarillo,
    },
  ];

  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
    setTypesFiltered(index);
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

import "./FiltersSection.css";
import { useState } from "react";
import { useIconsStore } from "../../../../store/ui_icons_store.jsx";

const FiltersSection = () => {
  const { ui_icons } = useIconsStore();
  const icons = [
    {
      title: "Trending",
      icon: ui_icons.trending_icon,
      icon_color: ui_icons.trending_icon_amarillo,
    },
    {
      title: "New",
      icon: ui_icons.new_icon,
      icon_color: ui_icons.new_icon_amarillo,
    },
    {
      title: "Top",
      icon: ui_icons.top_icon,
      icon_color: ui_icons.top_icon_amarillo,
    },
  ];

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

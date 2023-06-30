import "./Categories.css";
import { useIconsStore } from "../../../../../../../store/ui_icons_store";
import { useState } from "react";

const Categories = ({ categories }) => {
  const { ui_icons } = useIconsStore();
  const [toggleContainer, setToggleContainer] = useState(false);
  const { games } = categories;
  const { fs19_icon, fs22_icon } = ui_icons;

  return (
    <div className="categories__options-container">
      <div className="optionsComponentReusable__container">
        <div
          className="optionsTitleAndIcon__container"
          onClick={() => {
            setToggleContainer(!toggleContainer);
          }}
        >
          <span>Categories</span>
          <img
            src={ui_icons.triangle_icon}
            alt=""
            className="optionsComponentReusable__triangle-icon"
          />
          <div
            className={`optionsComponentReusable__dropDown-container ${
              toggleContainer ? "optionsComponent__toggle" : null
            }`}
          >
            {games.map((item) => {
              let icon;
              console.log(item);
              if (item.game_icon === "fs19_icon") {
                icon = <img src={fs19_icon} alt="" />;
              } else if (item.game_icon === "fs22_icon") {
                icon = <img src={fs22_icon} alt="" />;
              }

              return (
                <div className="gameOption__container" key={item.game_id}>
                  <span className="gameOption__title">
                    {item.game_name}
                    {icon}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

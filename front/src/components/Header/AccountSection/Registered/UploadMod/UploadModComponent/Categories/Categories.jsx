import "./Categories.css";
import { useIconsStore } from "../../../../../../../store/ui_icons_store";
import React, { useState, useEffect, useRef } from "react";
import Games from "./Games/Games";

const Categories = ({ categories }) => {
  const { ui_icons } = useIconsStore();
  const [toggleContainer, setToggleContainer] = useState(false);
  const { games } = categories;
  const { fs19_icon, fs22_icon } = ui_icons;
  const [selectedGame, setSelectedGame] = useState(null);
  const containerRef = useRef(null);

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setToggleContainer(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="categories__options-container">
      {/* --------------Games-------------- */}
      <div
        className="categorieReusable__container"
        ref={containerRef}
        onClick={() => {
          setToggleContainer(!toggleContainer);
        }}
      >
        {selectedGame ? (
          <>
            <span className="optionsComponentReusable__text">
              {selectedGame.game_name}
            </span>
            <img
              src={ui_icons.triangle_icon}
              alt=""
              className={`optionsComponentReusable__triangle-icon ${
                toggleContainer
                  ? "optionsComponentReusable__triangle-icon-active"
                  : null
              }`}
            />
          </>
        ) : (
          <>
            <span>Games</span>
            <img
              src={ui_icons.triangle_icon}
              alt=""
              className={`optionsComponentReusable__triangle-icon ${
                toggleContainer
                  ? "optionsComponentReusable__triangle-icon-active"
                  : null
              }`}
            />
          </>
        )}
        <div
          className={`optionsComponentReusable__dropDown-container ${
            toggleContainer ? "optionsComponent__toggle" : null
          }`}
        >
          {games.map((item) => {
            let icon;
            if (item.game_icon === "fs19_icon") {
              icon = <img className="game_icon" src={fs19_icon} alt="" />;
            } else if (item.game_icon === "fs22_icon") {
              icon = <img className="game_icon" src={fs22_icon} alt="" />;
            }

            return (
              <div
                className={`gameOption__container ${
                  selectedGame === item ? "selected" : ""
                }`}
                key={item.game_id}
                onClick={() => handleGameClick(item)}
              >
                <span className="gameOption__title">{item.game_name}</span>
                {icon}
              </div>
            );
          })}
        </div>
      </div>
      {/* --------------PrincipalCategories-------------- */}
      <div className="categorieReusable__container">
        <span>Categorie</span>
        <div
          className={`optionsComponentReusable__dropDown-container ${
            toggleContainer ? "optionsComponent__toggle" : null
          }`}
        ></div>
      </div>
      {/* --------------Subcategories-------------- */}
      <div className="categorieReusable__container">
        <span>Subcategories</span>
      </div>
      {/* --------------Size-------------- */}
      <div className="categorieReusable__container">
        <span>Size</span>
      </div>
      {/* --------------Antiquity-------------- */}
      <div className="categorieReusable__container">
        <span>Antiquity</span>
      </div>
      {/* --------------Brands-------------- */}
      <div className="categorieReusable__container">
        <span>Brands</span>
      </div>
    </div>
  );
};

export default Categories;

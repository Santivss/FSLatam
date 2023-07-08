import "./OptionsGames.css";
import { useIconsStore } from "../../../../../../../../store/ui_icons_store";
import { useState, useEffect, useRef } from "react";

const OptionsGames = ({ categories }) => {
  const { ui_icons } = useIconsStore();
  const { fs19_icon, fs22_icon } = ui_icons;

  const [containerVisibility, setContainerVisibility] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const containerRef = useRef(null);

  const getIconByName = (icon) => {
    if (icon === "fs19_icon") {
      return fs19_icon;
    } else if (icon === "fs22_icon") {
      return fs22_icon;
    } else {
      return null;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setContainerVisibility(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleGameSelection = (item) => {
    setSelectedOption(item);
    setContainerVisibility(false);

    const gameName = item.game_name;
    if (gameName === "fs19" || gameName === "fs22") {
      setSelectedGame(gameName);
    } else {
      null;
    }
  };

  return (
    <div className="optionsGames__container" ref={containerRef}>
      <div
        className="optionsGames__title-container"
        onClick={() => {
          setContainerVisibility(!containerVisibility);
        }}
      >
        {selectedOption ? (
          <div className="selectedOption__container">
            <span className="optionIndividual__title">
              {selectedOption.game_name}
            </span>
            <img
              src={getIconByName(selectedOption.game_icon)}
              alt=""
              className="optionIndividual__icon"
            />
          </div>
        ) : (
          <>
            <span>Game</span>
          </>
        )}
        <img
          src={ui_icons.triangle_icon}
          alt=""
          className={`optionsTriangle__icon ${
            containerVisibility ? "optionsGamesActive" : ""
          }`}
        />
      </div>
      <div
        className={`optionsContainer ${
          containerVisibility ? "optionsContainerActive" : ""
        }`}
      >
        {categories.games.map((item) => {
          const isSelected = selectedOption === item;

          return (
            <div
              onClick={() => handleGameSelection(item)}
              className={`optionIndividual__container ${
                isSelected ? "optionIndividualActive" : ""
              }`}
              key={item.game_id}
            >
              <span className="optionIndividual__title">{item.game_name}</span>
              <img
                src={getIconByName(item.game_icon)}
                alt=""
                className="optionIndividual__icon"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OptionsGames;

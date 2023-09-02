import "./OptionsGames.css";
import triangle_icon from "../../../../../../../../assets/uiIcons/triangle_icon.svg";
import { useState, useEffect, useRef } from "react";

const OptionsGames = ({
  categories,
  onOptionSelection,
  gameSelectedAlertStatus,
}) => {
  const [containerVisibility, setContainerVisibility] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const containerRef = useRef(null);

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
    onOptionSelection(item);

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
        className={`optionsGames__title-container ${
          gameSelectedAlertStatus ? "firstClickOffThis" : ""
        }`}
        onClick={() => {
          setContainerVisibility(!containerVisibility);
        }}
      >
        {selectedOption ? (
          <div className="selectedOption__container">
            <span className="optionIndividual__title">
              {selectedOption.game_name}
            </span>
          </div>
        ) : (
          <>
            <span>Game</span>
          </>
        )}
        <img
          src={triangle_icon}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OptionsGames;

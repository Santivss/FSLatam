import "./GameSelection.css";
import { useState, useEffect } from "react";
import fs19_icon from "../../../assets/uiIcons/fs19_icon.svg";
import fs22_icon from "../../../assets/uiIcons/fs22_icon.svg";
import { categoriesDataFilteredStore } from "../../../store/categoriesDataFilteredStore";

export const GameSelection = () => {
  const { gameSelected, setGameSelected } = categoriesDataFilteredStore();

  const [buttonClasses, setButtonClasses] = useState({
    fs19: "active",
    fs22: "active",
  });

  useEffect(() => {
    setButtonClasses((prevClasses) => ({
      fs19: gameSelected.fs19 ? "active" : "inactive",
      fs22: gameSelected.fs22 ? "active" : "inactive",
    }));
  }, [gameSelected]);

  const handleFilterClick = (filter) => {
    const newGameSelected = { ...gameSelected };

    // Si el filtro actual está inactivo y ambos filtros están inactivos, no hacemos nada
    if (
      !gameSelected[filter] &&
      !Object.values(gameSelected).some((value) => value !== null)
    ) {
      return;
    }

    // Alternar el estado del filtro actual
    newGameSelected[filter] =
      gameSelected[filter] === null ? getNumberForFilter(filter) : null;

    // Si ambos filtros están inactivos, activamos el filtro actual
    if (!newGameSelected.fs19 && !newGameSelected.fs22) {
      newGameSelected[filter] = getNumberForFilter(filter);
    }

    // Actualizar el estado global
    setGameSelected(newGameSelected);
  };

  // Función para asignar el número según el filtro
  const getNumberForFilter = (filter) => {
    if (filter === "fs19") {
      return 1;
    } else if (filter === "fs22") {
      return 2;
    }
    // Puedes agregar más casos según sea necesario

    return null; // Valor predeterminado si no coincide con ningún filtro conocido
  };

  return (
    <div className="game__icon-container">
      <button
        className={buttonClasses.fs19}
        onClick={() => handleFilterClick("fs19")}
      >
        <img src={fs19_icon} alt="" className="fs19__icon" />
      </button>
      <button
        className={buttonClasses.fs22}
        onClick={() => handleFilterClick("fs22")}
      >
        <img src={fs22_icon} alt="" className="fs22__icon" />
      </button>
    </div>
  );
};

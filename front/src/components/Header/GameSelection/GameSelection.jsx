// Importar estilos y archivos de iconos
import "./GameSelection.css";
import fs19_icon from "../../../assets/uiIcons/fs19_icon.svg";
import fs22_icon from "../../../assets/uiIcons/fs22_icon.svg";
import { useState } from "react";

// Definir el componente GameSelection
export const GameSelection = () => {
  // Estado para almacenar los filtros activos
  const [activeFilters, setActiveFilters] = useState([]);

  // Manejar el clic en un filtro
  const handleFilterClick = (filter) => {
    if (activeFilters.includes(filter)) {
      // Si el filtro ya está activo, se remueve
      setActiveFilters(activeFilters.filter((f) => f !== filter));
    } else {
      // Si el filtro no está activo, se agrega
      setActiveFilters([...activeFilters, filter]);
    }
  };

  // Verificar si un filtro está activo
  const isFilterActive = (filter) => activeFilters.includes(filter);

  // Renderizar el componente
  return (
    <div className="game__icon-container">
      <button
        className={isFilterActive("fs19") ? "active" : "inactive"}
        onClick={() => handleFilterClick("fs19")}
      >
        <img src={fs19_icon} alt="" className="fs19__icon" />
      </button>
      <button
        className={isFilterActive("fs22") ? "active" : "inactive"}
        onClick={() => handleFilterClick("fs22")}
      >
        <img src={fs22_icon} alt="" className="fs22__icon" />
      </button>
    </div>
  );
};

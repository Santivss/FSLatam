import React, { useEffect, useRef, useState } from "react";
import "./Filter_Antiquity_And_Size.css";
import { useIconsStore } from "../../../../store/ui_icons_store";

const Filter_Antiquity_And_Size = ({ time }) => {
  const { ui_icons } = useIconsStore();

  // Estado para controlar si el contenedor está abierto o cerrado
  const [isAntiqueOpen, setIsAntiqueOpen] = useState(false);
  // Estado para almacenar la opción seleccionada
  const [selectedOption, setSelectedOption] = useState(null);
  // Estado para almacenar la opción que se muestra actualmente
  const [displayedOption, setDisplayedOption] = useState(null);
  // Referencia al contenedor principal
  const containerRef = useRef(null);

  // Alternar entre abrir y cerrar el contenedor
  const toggleAntiqueSection = () => {
    setIsAntiqueOpen(!isAntiqueOpen);
  };

  // Seleccionar una opción
  const selectOption = (type, option) => {
    setSelectedOption({ type, option });
    setDisplayedOption(option);
  };

  useEffect(() => {
    // Manejador de eventos para cerrar el contenedor si se hace clic fuera de él
    const handleOutsideClick = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsAntiqueOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    // Establecer la primera opción como seleccionada por defecto
    if (time.options && time.options.length > 0 && !selectedOption) {
      setSelectedOption({ type: time.type, option: time.options[0] });
    }
  }, [time.options, time.type, selectedOption]);

  return (
    <div
      className={`filter__antique-container ${isAntiqueOpen ? "expanded" : ""}`}
      onClick={toggleAntiqueSection}
      ref={containerRef}
    >
      {/* Mostrar el tipo de categoría y la opción seleccionada */}
      <span className="antique__title">
        {time.type}:
        {selectedOption && (
          <span className="antique__title-selected">
            {selectedOption.option}
          </span>
        )}
      </span>
      {/* Icono que cambia de apariencia según si el contenedor está abierto o cerrado */}
      <img
        src={ui_icons.add_icon}
        alt=""
        className={`filter__antique-icon ${isAntiqueOpen ? "open" : ""}`}
      />
      {isAntiqueOpen && (
        <div className="antique__options-container">
          {/* Iterar sobre las opciones de la categoría */}
          {time.options.map((option) => (
            <span
              key={option}
              className={`antique__option ${
                selectedOption?.type === time.type &&
                selectedOption?.option === option
                  ? "antique__option-selected"
                  : ""
              }`}
              onClick={() => selectOption(time.type, option)}
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter_Antiquity_And_Size;

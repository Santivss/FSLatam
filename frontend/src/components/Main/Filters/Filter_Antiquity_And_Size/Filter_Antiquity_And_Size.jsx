import React, { useEffect, useRef, useState } from "react";
import "./Filter_Antiquity_And_Size.css";
import triangle_icon from "../../../../assets/uiIcons/triangle_icon.svg";

const Filter_Antiquity_And_Size = ({ time }) => {
  const containerRef = useRef(null);
  const [isAntiqueOpen, setIsAntiqueOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [displayedOption, setDisplayedOption] = useState(null);

  const toggleAntiqueSection = () => {
    setIsAntiqueOpen(!isAntiqueOpen);
  };

  const selectOption = (type, option) => {
    setSelectedOption({ type, option });
    setDisplayedOption(option);
  };

  useEffect(() => {
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
      <span className="antique__title">
        {time.type}:
        {selectedOption && (
          <span className="antique__title-selected">
            {selectedOption.option}
          </span>
        )}
      </span>

      <img
        src={triangle_icon}
        alt=""
        className={`filter__antique-icon ${isAntiqueOpen ? "open" : ""}`}
      />
      {isAntiqueOpen && (
        <div className="antique__options-container">
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

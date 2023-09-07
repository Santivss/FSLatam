import React, { useEffect, useRef, useState } from "react";
import "./Filters.css";
import FiltersSection from "./FiltersSection/FiltersSection";
import Filter_Antiquity_And_Size from "./Filter_Antiquity_And_Size/Filter_Antiquity_And_Size";
import { categoriesDataFilteredStore } from "../../../store/categoriesDataFilteredStore";

const Filters = () => {
  const { setAntiquityAndSizeSelected, antiquityAndSizeSelected } =
    categoriesDataFilteredStore();

  // Define un estado independiente para cada categoría
  const [selectedAntiquity, setSelectedAntiquity] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");

  useEffect(() => {
    setAntiquityAndSizeSelected({ selectedAntiquity, selectedSize });
  }, [selectedAntiquity, selectedSize]);

  const handleAntiquitySelection = (selection) => {
    setSelectedAntiquity(selection);
  };

  const handleSizeSelection = (selection) => {
    setSelectedSize(selection);
  };

  const timeAntiquity = [
    {
      type: "Antiquity",
      options: ["All", "New", "Intermediate", "Old"],
    },
  ];

  const timeSize = [
    {
      type: "Size",
      options: ["All", "Small", "Medium", "Large"],
    },
  ];

  return (
    <div className="filters__container">
      <FiltersSection />
      {/*  <Filter_Antiquity_And_Size
        time={timeAntiquity[0]}
        handleTypes={handleAntiquitySelection}
      /> */}
      {/* <Filter_Antiquity_And_Size
        time={timeSize[0]}
        handleTypes={handleSizeSelection}
      /> */}
    </div>
  );
};

export default Filters;

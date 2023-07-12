import "./Categories.css";
import { useIconsStore } from "../../../../../../../store/ui_icons_store";
import OptionsGames from "./OptionsGames/OptionsGames";
import { useState, useEffect, useRef } from "react";
import { SwitchAnimated } from "../../../../../../../utils/Animations/SwitchAnimated/SwitchAnimated";
import PrincipalCategories from "./PrincipalCategories/PrincipalCategories";
import Subcategories from "./Subcategories/Subcategories";
import Size from "./Size/Size";
import Antiquity from "./Antiquity/Antiquity";
import Brands from "./Brands/Brands";

const Categories = ({ categories }) => {
  const { ui_icons } = useIconsStore();
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setselectedSubcategory] = useState(null);
  const { fs19_icon, fs22_icon } = ui_icons;

  /* Lógica gameSelection */
  const handleOptionSelection = (gameOptionSelected) => {
    console.log("La opcion es", gameOptionSelected);
    setSelectedGame(gameOptionSelected);
  };
  /* Lógica PrincipalCategories */
  const handlePrincipalCategorySelection = (categorySelected) => {
    setSelectedCategory(categorySelected);
  };
  /* Lógica Subcategories */
  const handleSubcategoriesSelection = (subcategorySelected) => {
    setselectedSubcategory(subcategorySelected);
  };

  console.log("La subcategoria seleccionada es", selectedSubcategory);

  const [isConsoleEnabled, setConsoleEnabled] = useState(false);
  const [isMultiplayerEnabled, setMultiplayerEnabled] = useState(false);

  return (
    <div className="categories__options-container">
      <OptionsGames
        categories={categories}
        onOptionSelection={handleOptionSelection}
      />
      <PrincipalCategories
        categories={categories.principalCategories}
        selectedGame={selectedGame}
        handlePrincipalCategorySelection={handlePrincipalCategorySelection}
      />
      <Subcategories
        subcategories={categories.subcategories}
        selectedCategory={selectedCategory}
        handleSubcategoriesSelection={handleSubcategoriesSelection}
      />
      <Size size={categories.size} />
      <Antiquity antiquity={categories.antiquity} />
      {/* <Brands brands={categories.brands} /> */}
      <div className="switchOption__container">
        Consoles
        <SwitchAnimated
          onSwitchChange={setConsoleEnabled}
          value={isConsoleEnabled}
        />
      </div>
      <div className="switchOption__container">
        Multiplayer
        <SwitchAnimated
          onSwitchChange={setMultiplayerEnabled}
          value={isMultiplayerEnabled}
        />
      </div>
    </div>
  );
};

export default Categories;

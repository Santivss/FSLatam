import "./Categories.css";
import OptionsGames from "./OptionsGames/OptionsGames";
import { useEffect, useState } from "react";
import { SwitchAnimated } from "../../../../../../../utils/Animations/SwitchAnimated/SwitchAnimated";
import PrincipalCategories from "./PrincipalCategories/PrincipalCategories";
import Subcategories from "./Subcategories/Subcategories";
import Size from "./Size/Size";
import Antiquity from "./Antiquity/Antiquity";

const Categories = ({
  categories,
  handleCategoriesFiltered,
  gameSelectedAlertStatus,
  categorySelectedAlertStatus,
  subcategorySelectedAlertStatus,
  sizeSelectedAlertStatus,
  antiquitySelectedAlertStatus,
}) => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setselectedSubcategory] = useState(null);
  const [sizeSelected, setSizeSelected] = useState(null);
  const [antiquitySelected, setAntiquitySelected] = useState(null);
  const [isConsoleEnabled, setConsoleEnabled] = useState(false);
  const [isMultiplayerEnabled, setMultiplayerEnabled] = useState(false);

  /* Lógica gameSelection */
  const handleOptionSelection = (gameOptionSelected) => {
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
  /* Lógica Size */
  const handleSizeSelected = (size) => {
    setSizeSelected(size);
  };
  /* Lógica Antiquity */
  const handleAntiquitySelected = (antiquity) => {
    setAntiquitySelected(antiquity);
  };

  const handleCategoriesPost = () => {
    const categoriesSelected = {
      selectedGame: selectedGame?.game_id,
      selectedCategory: selectedCategory?.principal_category_id,
      selectedSubcategory: selectedSubcategory?.subcategory_id,
      sizeSelected: sizeSelected?.size_id,
      antiquitySelected: antiquitySelected?.antiquity_id,
      isConsoleEnabled,
      isMultiplayerEnabled,
    };

    handleCategoriesFiltered(categoriesSelected);
  };

  useEffect(() => {
    handleCategoriesPost();
  }, [
    selectedGame,
    selectedCategory,
    selectedSubcategory,
    sizeSelected,
    antiquitySelected,
    isConsoleEnabled,
    isMultiplayerEnabled,
  ]);

  return (
    <div className="categories__options-container">
      <OptionsGames
        gameSelectedAlertStatus={gameSelectedAlertStatus}
        categories={categories?.games}
        onOptionSelection={handleOptionSelection}
      />
      <PrincipalCategories
        categories={categories.principalCategories}
        selectedGame={selectedGame}
        handlePrincipalCategorySelection={handlePrincipalCategorySelection}
        categorySelectedAlertStatus={categorySelectedAlertStatus}
      />
      <Subcategories
        subcategories={categories.subcategories}
        selectedCategory={selectedCategory}
        handleSubcategoriesSelection={handleSubcategoriesSelection}
        subcategorySelectedAlertStatus={subcategorySelectedAlertStatus}
      />
      <Size
        size={categories.size}
        statusSize={selectedSubcategory?.size}
        handleSizeSelected={handleSizeSelected}
        sizeSelectedAlertStatus={sizeSelectedAlertStatus}
      />
      <Antiquity
        antiquity={categories.antiquity}
        statusAntiquity={selectedSubcategory?.antiquity}
        handleAntiquitySelected={handleAntiquitySelected}
        antiquitySelectedAlertStatus={antiquitySelectedAlertStatus}
      />
      <div className="switchOption__container">
        Console
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

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
  const { games } = categories;
  const { fs19_icon, fs22_icon } = ui_icons;

  const [isConsoleEnabled, setConsoleEnabled] = useState(false);
  const [isMultiplayerEnabled, setMultiplayerEnabled] = useState(false);

  return (
    <div className="categories__options-container">
      <OptionsGames categories={categories} />
      <PrincipalCategories categories={categories.principalCategories} />
      <Subcategories subcategories={categories.subcategories} />
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

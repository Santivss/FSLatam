import "./Categories.css";
import { useIconsStore } from "../../../../../../../store/ui_icons_store";
import OptionsGames from "./OptionsGames/OptionsGames";
import { useState, useEffect, useRef } from "react";
import { SwitchAnimated } from "../../../../../../../utils/Animations/SwitchAnimated/SwitchAnimated";
import PrincipalCategories from "./PrincipalCategories/PrincipalCategories";

const Categories = ({ categories }) => {
  const { ui_icons } = useIconsStore();
  const { games } = categories;
  const { fs19_icon, fs22_icon } = ui_icons;

  return (
    <div className="categories__options-container">
      <OptionsGames categories={categories} />
      <PrincipalCategories categories={categories} />
    </div>
  );
};

export default Categories;

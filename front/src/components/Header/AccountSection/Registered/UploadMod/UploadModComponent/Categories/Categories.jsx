import "./Categories.css";
import { useIconsStore } from "../../../../../../../store/ui_icons_store";
import OptionsReusable from "./OptionsReusable/OptionsReusable";
import React, { useState, useEffect, useRef } from "react";
import { SwitchAnimated } from "../../../../../../../utils/Animations/SwitchAnimated/SwitchAnimated";

const Categories = ({ categories }) => {
  const { ui_icons } = useIconsStore();
  const { games } = categories;
  const { fs19_icon, fs22_icon } = ui_icons;

  return (
    <div className="categories__options-container">
      <OptionsReusable />
    </div>
  );
};

export default Categories;

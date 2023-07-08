import "./PrincipalCategories.css";
import { useIconsStore } from "../../../../../../../../store/ui_icons_store";
import { useState } from "react";

const PrincipalCategories = ({ categories }) => {
  const { ui_icons } = useIconsStore();

  const [optionsPrincipalCategories, setOptionsPrincipalCategories] =
    useState(false);

  return (
    <div className="principalCategories__container">
      <div className="principalCategories__title-container">
        <span>Categories</span>
        <img
          src={ui_icons.triangle_icon}
          alt=""
          className={`principalCategories__triangle-icon ${
            optionsPrincipalCategories ? "PrincipalCategoriesActive" : ""
          }`}
        />
      </div>
      <div>
        <span>Tractors</span>
        <span>Harvesters</span>
        <span>Vehicles</span>
        <span>Cars</span>
      </div>
    </div>
  );
};

export default PrincipalCategories;

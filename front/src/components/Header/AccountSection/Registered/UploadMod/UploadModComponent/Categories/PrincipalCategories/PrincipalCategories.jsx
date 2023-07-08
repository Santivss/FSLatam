import "./PrincipalCategories.css";
import { useIconsStore } from "../../../../../../../../store/ui_icons_store";
import { useEffect, useRef, useState } from "react";

const PrincipalCategories = ({ categories }) => {
  const containerRef = useRef(null);

  const { ui_icons, principalCategories_icons } = useIconsStore();
  const [optionsPrincipalCategories, setOptionsPrincipalCategories] =
    useState(false);
  const [principalCategoriesVilibity, setPrincipalCategoriesVilibity] =
    useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); // Estado para el elemento seleccionado

  const handleVisibilityContainer = () => {
    setPrincipalCategoriesVilibity(!principalCategoriesVilibity);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setPrincipalCategoriesVilibity(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="principalCategories__container">
      <div
        onClick={handleVisibilityContainer}
        className="principalCategories__title-container"
        ref={containerRef}
      >
        {selectedCategory ? (
          <div className="selectedCategory__container">
            <span className="selectedCategory__title">
              {selectedCategory.principal_category_name}
            </span>
            <img
              src={
                principalCategories_icons[
                  selectedCategory.principal_category_icon
                ]
              }
              alt=""
              className="selectedCategory__icon"
            />
          </div>
        ) : (
          <>
            <span>Categories</span>
          </>
        )}

        <img
          src={ui_icons.triangle_icon}
          alt=""
          className={`principalCategories__triangle-icon ${
            principalCategoriesVilibity ? "PrincipalCategoriesActive" : ""
          }`}
        />
      </div>
      <div
        className={`principalCategoriesOption__container ${
          principalCategoriesVilibity ? "principalCategoriesOptionActive" : ""
        }`}
      >
        {categories.principalCategories.map((item) => {
          const iconName = item.principal_category_icon;
          const icon = principalCategories_icons[iconName];
          const isHighlighted = selectedCategory === item; // Verifica si el elemento actual está seleccionado

          return (
            <div
              key={item.principal_category_id}
              className={`principalCategoriesOptionIndividual__container ${
                isHighlighted ? "highlighted" : ""
              }`}
              onClick={() => handleCategorySelection(item)}
            >
              <span className="principalCateogoryOption__title">
                {item.principal_category_name}
              </span>
              <img
                src={icon}
                alt=""
                className="principalCategoriesOption__img"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrincipalCategories;

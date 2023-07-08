import { useIconsStore } from "../../../../../../../../store/ui_icons_store";
import { useEffect, useRef, useState } from "react";

const Subcategories = ({ subcategories }) => {
  const containerRef = useRef(null);
  const { ui_icons, principalCategories_icons } = useIconsStore();
  const [subcategoriesVisibility, setSubcategoriesVisibility] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleVisibilityContainer = () => {
    setSubcategoriesVisibility(!subcategoriesVisibility);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setSubcategoriesVisibility(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSubcategorySelection = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <div className="principalCategories__container">
      <div
        onClick={handleVisibilityContainer}
        className="principalCategories__title-container"
        ref={containerRef}
      >
        {selectedSubcategory ? (
          <div className="selectedCategory__container">
            <span className="selectedCategory__title">
              {selectedSubcategory.subcategory_name}
            </span>
            <img
              src={
                principalCategories_icons[selectedSubcategory.subcategory_icon]
              }
              alt=""
              className="selectedCategory__icon"
            />
          </div>
        ) : (
          <>
            <span>Subcategories</span>
          </>
        )}

        <img
          src={ui_icons.triangle_icon}
          alt=""
          className={`principalCategories__triangle-icon ${
            subcategoriesVisibility ? "PrincipalCategoriesActive" : ""
          }`}
        />
      </div>
      <div
        className={`principalCategoriesOption__container ${
          subcategoriesVisibility ? "principalCategoriesOptionActive" : ""
        }`}
      >
        {subcategories.map((item) => {
          const iconName = item.subcategory_icon;
          const icon = principalCategories_icons[iconName];
          const isHighlighted = selectedSubcategory === item; // Verifica si el elemento actual está seleccionado

          return (
            <div
              key={item.subcategory_id}
              className={`principalCategoriesOptionIndividual__container ${
                isHighlighted ? "highlighted" : ""
              }`}
              onClick={() => handleSubcategorySelection(item)}
            >
              <span className="principalCateogoryOption__title">
                {item.subcategory_name}
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

export default Subcategories;

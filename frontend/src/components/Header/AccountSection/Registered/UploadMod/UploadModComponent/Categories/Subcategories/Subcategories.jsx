import "./Subcategories.css";
import triangle_icon from "../../../../../../../../assets/uiIcons/triangle_icon.svg";
import { useEffect, useRef, useState } from "react";

const Subcategories = ({
  subcategories,
  selectedCategory,
  handleSubcategoriesSelection,
  subcategorySelectedAlertStatus,
}) => {
  const containerRef = useRef(null);
  const [subcategoriesVisibility, setSubcategoriesVisibility] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [containerInteractuable, setContainerInteractuable] = useState(false);

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

    setSelectedSubcategory(null);
    handleSubcategoriesSelection(null);

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectedCategory]);

  const handleSubcategorySelection = (subcategory) => {
    setSelectedSubcategory(subcategory);
    handleSubcategoriesSelection(subcategory);
  };

  useEffect(() => {
    {
      selectedCategory?.subcategories.length > 0
        ? setContainerInteractuable(true)
        : selectedCategory?.subcategories.length === 0
        ? setContainerInteractuable(false)
        : null;
    }
  }, [selectedCategory]);

  return (
    <div
      className={`principalCategories__container ${
        containerInteractuable ? "subcategoryContainer__active" : ""
      }`}
    >
      <div
        onClick={handleVisibilityContainer}
        className={`principalCategories__title-container ${
          containerInteractuable && subcategorySelectedAlertStatus
            ? "subcategory__active subcategoryAlertBorder"
            : containerInteractuable
            ? "subcategory__active"
            : ""
        } `}
        ref={containerRef}
      >
        {selectedSubcategory ? (
          <div className="selectedCategory__container">
            <span className="selectedCategory__title">
              {selectedSubcategory.subcategory_name}
            </span>
          </div>
        ) : (
          <>
            <span>Subcategories</span>
          </>
        )}

        <img
          src={triangle_icon}
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
        {selectedCategory?.subcategories.map((item) => {
          const isHighlighted = selectedSubcategory === item;

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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Subcategories;

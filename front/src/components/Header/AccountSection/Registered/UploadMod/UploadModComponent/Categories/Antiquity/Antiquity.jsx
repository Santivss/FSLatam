import { useEffect, useRef, useState } from "react";
import { useIconsStore } from "../../../../../../../../store/ui_icons_store";

const Antiquity = ({ antiquity, statusAntiquity, handleAntiquitySelected }) => {
  const { ui_icons } = useIconsStore();
  const containerRef = useRef(null);
  const [subcategoriesVisibility, setSubcategoriesVisibility] = useState(false);
  const [selectedAntiquity, setSelectedAntiquity] = useState(null);

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

    setSelectedAntiquity(null);

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [statusAntiquity]);

  const handleAntiquitySelection = (antiquity) => {
    setSelectedAntiquity(antiquity);
    handleAntiquitySelected(antiquity);
  };

  return (
    <div
      className={`principalCategories__container ${
        statusAntiquity ? "subcategoryContainer__active" : ""
      }`}
    >
      <div
        onClick={handleVisibilityContainer}
        className={`principalCategories__title-container ${
          statusAntiquity ? "subcategory__active" : ""
        } `}
        ref={containerRef}
      >
        {selectedAntiquity ? (
          <div className="selectedCategory__container">
            <span className="selectedCategory__title">
              {selectedAntiquity.antiquity_name}
            </span>
          </div>
        ) : (
          <>
            <span>Antiquity</span>
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
        {antiquity.map((item) => {
          const isHighlighted = selectedAntiquity === item;

          return (
            <div
              key={item.antiquity_id}
              className={`principalCategoriesOptionIndividual__container ${
                isHighlighted ? "highlighted" : ""
              }`}
              onClick={() => handleAntiquitySelection(item)}
            >
              <span className="principalCateogoryOption__title">
                {item.antiquity_name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Antiquity;

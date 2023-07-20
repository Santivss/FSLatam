import { useEffect, useRef, useState } from "react";
import { useIconsStore } from "../../../../../../../../store/ui_icons_store";

const Size = ({
  size,
  statusSize,
  handleSizeSelected,
  sizeSelectedAlertStatus,
}) => {
  const { ui_icons } = useIconsStore();
  const containerRef = useRef(null);
  const [subcategoriesVisibility, setSubcategoriesVisibility] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

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

    setSelectedSize(null);

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [statusSize]);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    handleSizeSelected(size);
  };

  return (
    <div
      className={`principalCategories__container ${
        statusSize ? "subcategoryContainer__active" : ""
      }`}
    >
      <div
        onClick={handleVisibilityContainer}
        className={`principalCategories__title-container ${
          statusSize && sizeSelectedAlertStatus
            ? "subcategory__active subcategoryAlertBorder"
            : statusSize
            ? "subcategory__active"
            : ""
        } `}
        ref={containerRef}
      >
        {selectedSize ? (
          <div className="selectedCategory__container">
            <span className="selectedCategory__title">
              {selectedSize.size_name}
            </span>
          </div>
        ) : (
          <>
            <span>Size</span>
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
        {size.map((size) => {
          const isHighlighted = selectedSize === size;

          return (
            <div
              key={size.size_id}
              className={`principalCategoriesOptionIndividual__container ${
                isHighlighted ? "highlighted" : ""
              }`}
              onClick={() => handleSizeSelection(size)}
            >
              <span className="principalCateogoryOption__title">
                {size.size_name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Size;

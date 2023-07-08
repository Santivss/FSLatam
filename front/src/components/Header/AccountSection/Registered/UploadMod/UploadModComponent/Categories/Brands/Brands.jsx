import { useEffect, useRef, useState } from "react";
import { useIconsStore } from "../../../../../../../../store/ui_icons_store";

const Brands = ({ brands }) => {
  console.log(brands);
  /* const { ui_icons } = useIconsStore();
  const containerRef = useRef(null);
  const [brandsVisibility, setBrandsVisibility] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleVisibilityContainer = () => {
    setBrandsVisibility(!brandsVisibility);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setBrandsVisibility(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleBrandSelection = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <div className="principalCategories__container">
      <div
        onClick={handleVisibilityContainer}
        className="principalCategories__title-container"
        ref={containerRef}
      >
        {selectedBrand ? (
          <div className="selectedCategory__container">
            <span className="selectedCategory__title">
              {selectedBrand.brand_name}
            </span>
          </div>
        ) : (
          <>
            <span>Brands</span>
          </>
        )}

        <img
          src={ui_icons.triangle_icon}
          alt=""
          className={`principalCategories__triangle-icon ${
            brandsVisibility ? "PrincipalCategoriesActive" : ""
          }`}
        />
      </div>
      <div
        className={`principalCategoriesOption__container ${
          brandsVisibility ? "principalCategoriesOptionActive" : ""
        }`}
      >
        {brands.map((item) => {
          const isHighlighted = selectedBrand === item;

          return (
            <div
              key={item.brand_id}
              className={`principalCategoriesOptionIndividual__container ${
                isHighlighted ? "highlighted" : ""
              }`}
              onClick={() => handleBrandSelection(item)}
            >
              <span className="principalCateogoryOption__title">
                {item.brand_name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  ); */
};

export default Brands;

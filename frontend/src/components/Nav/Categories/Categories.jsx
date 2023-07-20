import React, { useState } from "react";
import "./Categories.css";
import { categories } from "../../../assets/categorieIcons";
import { useIconsStore } from "../../../store/ui_icons_store";

export const Categories = () => {
  const { ui_icons } = useIconsStore();

  const [expandedCategories, setExpandedCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const handleCategoryClick = (index) => {
    if (expandedCategories.includes(index)) {
      setExpandedCategories([]);
    } else {
      setExpandedCategories([index]);
    }

    setActiveCategory(index);
    setActiveSubcategory(null);
  };

  const handleSubcategoryClick = (subIndex) => {
    setActiveSubcategory(subIndex);
  };

  /* funcion de scroll */
  const scrollToTop = () => {
    const container = document.querySelector(".categories__container");
    container.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <h5 className="categories__title">Categories</h5>
      <div className="categories__container">
        {categories.map((category, index) => (
          <div key={index} className="individual__category-item__container">
            <div className="individual__category-item__second-container">
              <div
                onClick={() => handleCategoryClick(index)}
                className={`category ${
                  activeCategory === index ? "active-category" : ""
                }`}
              >
                <img src={category.icon} alt="" className="principal__icon" />
                <h5
                  className={`category__title ${
                    activeCategory === index ? "active-category" : ""
                  }`}
                >
                  {category.category}
                </h5>
                {category.subcategories.length > 0 && (
                  <img
                    src={ui_icons.triangle_icon}
                    alt=""
                    className={`triangle__icon ${
                      expandedCategories.includes(index) ? "expanded-icon" : ""
                    }`}
                  />
                )}
              </div>
            </div>
            {expandedCategories.includes(index) &&
              category.subcategories.length > 0 && (
                <ul
                  className={`subCategory__container ${activeSubcategory} subCategory__container-active`}
                >
                  <span className="longLine"></span>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li
                      key={subIndex}
                      onClick={() => handleSubcategoryClick(subIndex)}
                      className={`subcategory ${
                        activeSubcategory === subIndex
                          ? "active-subcategory"
                          : ""
                      }`}
                    >
                      <span className="lineSubcategorySeparate"></span>
                      <img
                        src={subcategory.icon}
                        alt=""
                        className="subcategory__icon"
                      />
                      <div className="subcategory__namecount">
                        <span className="subcategory__title">
                          {subcategory.name}
                        </span>
                        <span className="count__mods">(1520)</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
          </div>
        ))}
        <button onClick={scrollToTop} className="scroll-top-button">
          <img src={ui_icons.arrow_icon} alt="" className="arrow__icon" />
        </button>
      </div>
    </>
  );
};

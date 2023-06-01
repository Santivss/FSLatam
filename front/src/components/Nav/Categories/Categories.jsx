import React, { useState } from "react";
import "./Categories.css";
import { categories } from "../../../assets/categorieIcons";
import triangle__icon from "../../../assets/uiIcons/triangle_icon.svg";
import arrow_icon from "../../../assets/uiIcons/arrow_icon.svg";

export const Categories = () => {
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  /* Numero aleatrio */

  let numero = parseInt(Math.random() * 1000);

  const handleCategoryClick = (index) => {
    if (expandedCategories.includes(index)) {
      setExpandedCategories([]); // Cerrar todas las categorías
    } else {
      setExpandedCategories([index]); // Expandir la categoría actual
    }

    setActiveCategory(index);
    setActiveSubcategory(null); // Reiniciar activeSubcategory a null al cambiar de categoría
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
                    src={triangle__icon}
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
                <ul className="subCategory__container">
                  <span className="line2"></span>
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
                      <span className="line"></span>
                      <img
                        src={subcategory.icon}
                        alt=""
                        className="subcategory__icon"
                      />
                      <div className="subcategory__namecount">
                        <span className="subcategory__title">
                          {subcategory.name}
                        </span>
                        <span className="count__mods">({numero})</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
          </div>
        ))}
        <button onClick={scrollToTop} className="scroll-top-button">
          <img src={arrow_icon} alt="" className="arrow__icon" />
        </button>
      </div>
    </>
  );
};

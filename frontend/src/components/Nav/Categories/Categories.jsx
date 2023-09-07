import React, { useEffect, useState } from "react";
import "./Categories.css";
import { firstRequestData } from "../../../store/firstRequestInformation";
import { categoriesDataFilteredStore } from "../../../store/categoriesDataFilteredStore";
import { motion } from "framer-motion";
import OrderCategories from "../../../utils/OrderCategories";
import wheel_icon from "../../../assets/uiIcons/wheel_icon.svg";

export const Categories = () => {
  const { categories } = firstRequestData();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null);

  const { setCategorySelected, setSubcategorySelected } =
    categoriesDataFilteredStore();

  const toggleSubcategoryContainer = (categoryId) => {
    if (selectedCategoryId === categoryId) {
      setSelectedSubcategoryId((prev) => (prev === null ? prev : null));
    } else {
      setSelectedCategoryId(categoryId);
      setSelectedSubcategoryId(null);
    }
  };

  const selectSubcategory = (subcategoryId) => {
    setSelectedSubcategoryId(subcategoryId);
  };

  useEffect(() => {
    setCategorySelected(selectedCategoryId);
    setSubcategorySelected(selectedSubcategoryId);
  }, [selectedCategoryId, selectedSubcategoryId]);

  const orderedCategories = OrderCategories(categories);

  return (
    <div className="categoriesNav__container">
      <button className="categoriesNav__title">Categorias</button>

      {categories ? null : (
        <img src={wheel_icon} alt="wheel_icon" className="test" />
      )}
      {orderedCategories.map((item) => {
        const isCategorySelected =
          selectedCategoryId === item.principal_category_id;
        const isSubcategorySelected = selectedSubcategoryId !== null;

        return (
          <div
            key={item.principal_category_id}
            className="categoriesItem__container"
          >
            <div
              className={`categoriesPrincipalCategory__container ${
                isCategorySelected ? "principalCategory-active" : ""
              }`}
              onClick={() => {
                toggleSubcategoryContainer(item.principal_category_id);
              }}
            >
              <span className="categoriesPrincipalCategory__title">
                {item.principal_category_name}
              </span>
              <span className="categoriesPrincipalCategory__countMods">
                {item.modsWithId}
              </span>
            </div>
            {isCategorySelected ? (
              <div className="subcategoryExpanded__container">
                {item.subcategories.map((subcategory) => {
                  const isSubcategoryActive =
                    selectedSubcategoryId === subcategory.subcategory_id;

                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.1 }}
                      key={subcategory.subcategory_id}
                      className={`subcategoryExpandedItem__container ${
                        isSubcategoryActive ? "subcategory-active" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        selectSubcategory(subcategory.subcategory_id);
                      }}
                    >
                      <span className="subcategoryExpandedItem__title">
                        {subcategory.subcategory_name}
                      </span>
                      <span className="subcategoryExpandedItem__countMods">
                        {subcategory.modsWithId}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

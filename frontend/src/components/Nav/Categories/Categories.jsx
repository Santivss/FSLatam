import React, { useState } from "react";
import "./Categories.css";
import { firstRequestData } from "../../../store/firstRequestInformation";

export const Categories = () => {
  const { categories } = firstRequestData();

  const [expandedSubcategoryContainerId, setExpandedSubcategoryContainerId] =
    useState(null);
  const [temporalSelectedCategoryId, setTemporalSelectedCategoryId] =
    useState(null);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null);

  const handleContainerClick = (category) => {
    setSelectedCategoryId(category.principal_category_id);
    setTemporalSelectedCategoryId(category.principal_category_id);
    if (expandedSubcategoryContainerId === category.principal_category_id) {
      return;
    }
    setSelectedSubcategoryId(null);
    setExpandedSubcategoryContainerId(category.principal_category_id);
  };

  const handleSubcategoryClick = (subcategory) => {
    setTemporalSelectedCategoryId(subcategory.category_id);

    if (expandedSubcategoryContainerId) {
      setSelectedSubcategoryId(subcategory.subcategory_id);
    }
  };

  // Ordenar alfabéticamente las categorías y subcategorías
  const sortedCategories = categories?.principalCategories.sort((a, b) =>
    a.principal_category_name.localeCompare(b.principal_category_name)
  );

  return (
    <div className="categoriesNav__container">
      <span className="categories__title">Categories</span>
      {sortedCategories?.map((category) => {
        const isContainerExpanded =
          expandedSubcategoryContainerId === category.principal_category_id;

        // Ordenar alfabéticamente las subcategorías
        const sortedSubcategories = category.subcategories.sort((a, b) =>
          a.subcategory_name.localeCompare(b.subcategory_name)
        );

        return (
          <div
            key={category.principal_category_id}
            className={`bothCategoriesNav__container ${
              isContainerExpanded ? "bothCategoriesNav__container-active" : ""
            }`}
          >
            <div
              onClick={() => handleContainerClick(category)}
              className={`principalCategoriesNav__container ${
                isContainerExpanded ? "principalCategoriesNav-active" : ""
              }`}
            >
              <span className="principalCategoryNav__title">
                {category.principal_category_name}
              </span>

              <span>1568</span>
            </div>
            <div
              className={`subcategoriesNav__container ${
                isContainerExpanded
                  ? "subcategoriesNav__container--expanded"
                  : ""
              }`}
            >
              {isContainerExpanded
                ? sortedSubcategories.map((subcategory) => {
                    const isSubcategorySelected =
                      temporalSelectedCategoryId === subcategory.category_id &&
                      selectedSubcategoryId === subcategory.subcategory_id;

                    return (
                      <div
                        key={subcategory.subcategory_id}
                        className={`subcategoriesNavIndividual__container ${
                          isSubcategorySelected ? "selected" : ""
                        }`}
                        onClick={() => handleSubcategoryClick(subcategory)}
                      >
                        <span className="subcategoryNav__longLine"></span>
                        <span className="subcategoryNav__shortLine"></span>
                        <span className="subcategoryNav__title">
                          {subcategory.subcategory_name}
                        </span>
                        <span className="subcategoryNav__title-count">
                          1.551
                        </span>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

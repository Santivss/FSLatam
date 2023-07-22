import React, { useState } from "react";
import "./Categories.css";
import { useIconsStore } from "../../../store/ui_icons_store";
import { firstRequestData } from "../../../store/firstRequestInformation";

export const Categories = () => {
  const { principalCategories_icons } = useIconsStore();
  const { categories } = firstRequestData();

  const [expandedSubcategoryContainerId, setExpandedSubcategoryContainerId] =
    useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null);

  const handleContainerClick = (category) => {
    if (expandedSubcategoryContainerId === category.principal_category_id) {
      return;
    }
    setSelectedSubcategoryId(null);
    setExpandedSubcategoryContainerId(category.principal_category_id);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedCategoryId(subcategory.category_id);

    if (expandedSubcategoryContainerId) {
      setSelectedSubcategoryId(subcategory.subcategory_id);
    }
  };

  return (
    <div className="categoriesNav__container">
      <span className="categories__title">Categories</span>
      {categories?.principalCategories.map((category) => {
        const categoryIconName = category.principal_category_icon;
        const isContainerExpanded =
          expandedSubcategoryContainerId === category.principal_category_id;

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
              <img
                className={`principalCategoryNav__icon ${
                  isContainerExpanded ? "principalCategoryNav__icon-active" : ""
                }`}
                src={principalCategories_icons[categoryIconName]}
                alt={categoryIconName}
              />
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
                ? category.subcategories.map((subcategory) => {
                    const subcategoryIconName = subcategory.subcategory_icon;
                    const isSubcategorySelected =
                      selectedCategoryId === subcategory.category_id &&
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
                        <img
                          className={`subcategoryNav__icon ${
                            isSubcategorySelected
                              ? "subcategoryNav__icon-selected"
                              : ""
                          }`}
                          src={principalCategories_icons[subcategoryIconName]}
                          alt={subcategoryIconName}
                        />
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

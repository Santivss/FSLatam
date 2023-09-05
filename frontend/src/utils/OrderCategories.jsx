const OrderCategories = (categories) => {
  // Verifica si categories está definido y si categoriesByPrincipalCategoryId es un arreglo
  if (
    categories &&
    categories.categoriesByPrincipalCategoryId &&
    Array.isArray(categories.categoriesByPrincipalCategoryId)
  ) {
    const orderedCategories = [...categories.categoriesByPrincipalCategoryId];

    orderedCategories.sort((a, b) => {
      const nameA = a.principal_category_name.toUpperCase();
      const nameB = b.principal_category_name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    return orderedCategories;
  } else {
    // Manejar el caso en el que categories no está definido o no es un arreglo
    return [];
  }
};

export default OrderCategories;

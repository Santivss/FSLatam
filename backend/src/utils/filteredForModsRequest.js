const filteredForModsRequest = async (
  subcategorySelected,
  antiquityAndSizeSelected,
  typesFiltered,
  fs19,
  fs22,
  categorySelected
) => {
  const whereClause = {};

  if (subcategorySelected) {
    whereClause.subcategory_id = subcategorySelected;
  }

  if (categorySelected) {
    whereClause.principal_category_id = categorySelected;
  }

  if (fs19 !== null && fs22 !== null) {
  } else {
    if (fs19 !== null) {
      whereClause.game_id = 1;
    }
    if (fs22 !== null) {
      whereClause.game_id = 2;
    }
  }
  return whereClause;
};

export default filteredForModsRequest;

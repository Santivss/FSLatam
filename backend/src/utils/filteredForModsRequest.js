const filteredForModsRequest = async (
  subcategorySelected,
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

  if (!fs19 || !fs22) {
    if (fs19 === 1) whereClause.game_id = 1;
    if (fs22 === 2) whereClause.game_id = 2;
  }

  return whereClause;
};

export default filteredForModsRequest;

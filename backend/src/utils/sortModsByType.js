const sortModsByType = (mods, typesFiltered) => {
  if (typesFiltered === 1) {
    // Ordenar por createdAt en orden descendente
    return mods.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });
  } else if (typesFiltered === 2) {
    // Ordenar por downloadsCount en orden descendente
    return mods.sort((a, b) => b.downloadsCount - a.downloadsCount);
  } else {
    // Si typesFiltered no es 1 ni 2, no realizar ninguna ordenación
    return mods;
  }
};

export default sortModsByType;

import { create } from "zustand";

export const categoriesDataFilteredStore = create((set) => ({
  categorySelected: null,
  setCategorySelected: (value) =>
    set((state) => ({
      categorySelected: value,
    })),
  subcategorySelected: null,
  typesFiltered: {
    trending: false,
    new: true,
    top: false,
  },
  antiquitySelected: {
    new: false,
    intermadiate: false,
    old: false,
  },
  size: {
    small: false,
    medium: false,
    large: false,
  },
}));

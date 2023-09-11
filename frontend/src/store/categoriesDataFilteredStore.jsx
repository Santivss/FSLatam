import { create } from "zustand";

export const categoriesDataFilteredStore = create((set) => ({
  categorySelected: null,
  setCategorySelected: (value) =>
    set((state) => ({
      categorySelected: value,
    })),
  /* ----------subcategorySelected-----------  */
  subcategorySelected: null,
  setSubcategorySelected: (value) => {
    set((state) => ({
      subcategorySelected: value,
    }));
  },
  /* ----------typesFiltered-----------  */
  typesFiltered: 1,
  setTypesFiltered: (value) => {
    set((state) => ({
      typesFiltered: value,
    }));
  },
  /* ----------antiquitySelected-----------  */
  antiquityAndSizeSelected: null,
  setAntiquityAndSizeSelected: (value) => {
    set((state) => ({
      antiquityAndSizeSelected: value,
    }));
  },

  /* ----------gameSelected-----------  */
  gameSelected: {
    fs19: 1,
    fs22: 2,
  },
  setGameSelected: (value) => {
    set((state) => ({
      gameSelected: value,
    }));
  },
}));

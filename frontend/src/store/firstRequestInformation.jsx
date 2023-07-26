import { create } from "zustand";

export const firstRequestData = create((set) => ({
  categories: null,
  dataMods: null,
  setCategories: (value) =>
    set((state) => ({
      categories: value,
    })),
  setMods: (value) =>
    set((state) => ({
      dataMods: value,
    })),
}));

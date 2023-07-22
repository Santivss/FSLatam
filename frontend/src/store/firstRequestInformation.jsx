import { create } from "zustand";

export const firstRequestData = create((set) => ({
  categories: null,
  setCategories: (value) =>
    set((state) => ({
      categories: value,
    })),
}));

import { create } from "zustand";

export const userInfoStore = create((set) => ({
  token: null,
  isAuthenticated: !!localStorage.getItem("token"),
  setIsAuthenticated: (isAuthenticated) =>
    set((state) => ({ ...state, isAuthenticated })),
}));

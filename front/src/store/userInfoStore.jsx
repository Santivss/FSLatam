import { create } from "zustand";

export const userInfoStore = create((set) => ({
  token: null,
  isAuthenticated: false,
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  increment: (value) => set((state) => ({ count: state.count + value })),
}));

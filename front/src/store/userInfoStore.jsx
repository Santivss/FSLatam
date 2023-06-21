import { create } from "zustand";

export const userInfoStore = create((set) => ({
  token: localStorage.getItem("token"), // Obtener el token almacenado en localStorage
  isAuthenticated: localStorage.getItem("token") !== null, // Verificar si hay un token guardado
  test: false,
  increment: (value) => set((state) => ({ count: state.count + value })),
}));

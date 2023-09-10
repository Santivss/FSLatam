import { create } from "zustand";
import jwt_decode from "jwt-decode";

export const userInfoStore = create((set) => ({
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  userName: null,
  setUserName: (value) =>
    set((state) => ({
      userName: value,
    })),
  userRol: null,
  setUserRol: (state) =>
    set((state) => ({
      userRol: value,
    })),
  userId: null,
  checkTokenValidity: () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp > currentTime) {
          const userId = decodedToken.userId;

          set({
            isAuthenticated: true,
            userId,
          });
        } else {
          set({ isAuthenticated: false, userId: null });
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        set({ isAuthenticated: false, userId: null });
      }
    } else {
      set({ isAuthenticated: false, userId: null });
    }
  },
  userIcon: null,
  setUserIicon: (value) =>
    set((state) => ({
      userIcon: value,
    })),
  email: null,
  setEmail: (value) =>
    set((state) => ({
      email: value,
    })),
  countMods: null,
  setCountMods: (value) =>
    set((state) => ({
      countMods: value,
    })),
}));

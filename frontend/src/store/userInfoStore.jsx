import { create } from "zustand";
import jwt_decode from "jwt-decode";

export const userInfoStore = create((set) => ({
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  userName: null,
  checkTokenValidity: () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp > currentTime) {
          const userName = decodedToken;

          set({
            isAuthenticated: true,
            userName,
          });
        } else {
          set({ isAuthenticated: false, userName: null });
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        set({ isAuthenticated: false, userName: null });
      }
    } else {
      set({ isAuthenticated: false, userName: null });
    }
  },
}));

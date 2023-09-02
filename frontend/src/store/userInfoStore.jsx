import { create } from "zustand";
import jwt_decode from "jwt-decode";

export const userInfoStore = create((set) => ({
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  userName: null,
  userId: null,
  checkTokenValidity: () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp > currentTime) {
          const userName = decodedToken.userName;
          const userId = decodedToken.userId;

          set({
            isAuthenticated: true,
            userName,
            userId,
          });
        } else {
          set({ isAuthenticated: false, userName: null, userId: null });
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        set({ isAuthenticated: false, userName: null, userId: null });
      }
    } else {
      set({ isAuthenticated: false, userName: null, userId: null });
    }
  },
  userIcon: null,
}));

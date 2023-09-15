import { create } from "zustand";

export const menuContainersStore = create((set) => ({
  navContainerStatus: false,
  setNavContainerStatus: (value) => {
    set((state) => ({
      navContainerStatus: value,
    }));
  },
}));

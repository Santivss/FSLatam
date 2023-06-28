import { create } from "zustand";

export const CloseConfirmationComponentStore = create((set) => ({
  showConfirmation: false,
  setShowConfirmation: (value) => set({ showConfirmation: value }),
}));

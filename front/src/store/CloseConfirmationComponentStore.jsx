import { create } from "zustand";

const closeConfirmationComponentStore = create((set) => ({
  confirmAction: null,
  setConfirmAction: (callback) => set(() => ({ confirmAction: callback })),
}));

export default closeConfirmationComponentStore;

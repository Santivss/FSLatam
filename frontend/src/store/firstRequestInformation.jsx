import { create } from "zustand";

export const firstRequestData = create((set) => ({
  counter: 10,
  sumar: (parameter) => {
    parameter + 1;
  },
}));

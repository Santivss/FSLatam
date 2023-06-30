export const BoxAnimation = {
  initial: { opacity: 1, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 2,
    scale: {
      type: "tween",
      duration: 0.1,
    },
  },
};

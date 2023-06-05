export const BoxAnimation = {
  initial: { opacity: 0, scale: 0.2 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 1,
    ease: [0, 0.71, 0.2, 1.01],
    scale: {
      type: "tween",
      duration: 0.1,
    },
  },
};

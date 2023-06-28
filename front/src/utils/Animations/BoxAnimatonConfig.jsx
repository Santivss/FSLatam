export const BoxAnimation = {
  initial: { opacity: 0.7, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 2,
    ease: [0, 0.71, 0.2, 1.01],
    scale: {
      type: "tween",
      duration: 0.1,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.58, 1] as any  // FIXED
    } as any
  },
};

export const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.58, 1] as any // FIXED
    } as any
  },
};

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    } as any
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.58, 1] as any  // FIXED
    } as any
  },
};

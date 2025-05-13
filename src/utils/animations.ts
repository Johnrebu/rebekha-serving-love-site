
import { Variants } from "framer-motion";

// Fade up animation for content sections
export const fadeUpVariant: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

// Stagger children animation for lists and grids
export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Slide in from right
export const slideRightVariant: Variants = {
  hidden: { 
    x: 100, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  }
};

// Slide in from left
export const slideLeftVariant: Variants = {
  hidden: { 
    x: -100, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  }
};

// Scale animation for images and cards
export const scaleVariant: Variants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.5 
    } 
  }
};

// Smooth reveal animation for sections
export const revealVariant: Variants = {
  hidden: { 
    opacity: 0, 
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" 
  },
  visible: { 
    opacity: 1, 
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { 
      duration: 0.8, 
      ease: "easeInOut" 
    } 
  }
};

// Rotate in animation
export const rotateVariant: Variants = {
  hidden: { 
    rotate: -5, 
    opacity: 0 
  },
  visible: { 
    rotate: 0, 
    opacity: 1,
    transition: { 
      duration: 0.5 
    } 
  }
};

// Parallax scroll effect
export const parallaxVariant = (strength: number = 100): Variants => ({
  hidden: {},
  visible: {
    y: [-strength, strength],
    transition: {
      repeat: 0,
      repeatType: "reverse",
      duration: 1,
      ease: "linear"
    }
  }
});

// Hover animations for cards and buttons
export const hoverScaleVariant = {
  rest: { 
    scale: 1,
    transition: { 
      duration: 0.2, 
      ease: "easeInOut" 
    }
  },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.2, 
      ease: "easeInOut" 
    } 
  }
};

// Background element animations
export const backgroundElementVariant: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 0.5,
    transition: { 
      duration: 1.5, 
      ease: "easeInOut" 
    } 
  }
};

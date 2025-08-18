import { motion } from "framer-motion";

const sliderVariants = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  animate: {
    x: "-100%",
    opacity: [0, 1, 1, 1, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
      opacity: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "easeInOut",
        times: [0, 0.1, 0.8, 0.9, 1],
      },
    },
  },
};

const typewriterVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.05,
    },
  },
};

const characterVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const SlidingText = ({
  text = "Adjust to the object, and you shall find a way around or through it.",
  animationType = "slide",
}) => {
  if (animationType === "typewriter") {
    const characters = text.split("");

    return (
      <motion.div
        className="sliding-text-container"
        variants={typewriterVariants}
        initial="initial"
        animate="animate"
        style={{
          fontSize: "clamp(1.5rem, 4vw, 3rem)",
          fontWeight: "300",
          color: "rgba(107, 114, 128, 0.8)",
          fontStyle: "italic",
          letterSpacing: "0.02em",
          lineHeight: "1.3",
          textAlign: "center",
          padding: "2rem",
          fontFamily: "Georgia, serif",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={characterVariants}
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="sliding-text-container"
      variants={sliderVariants}
      initial="initial"
      animate="animate"
      style={{
        fontSize: "clamp(1.5rem, 4vw, 3rem)",
        fontWeight: "300",
        color: "rgba(107, 114, 128, 0.9)",
        fontStyle: "italic",
        letterSpacing: "0.02em",
        lineHeight: "1.2",
        whiteSpace: "nowrap",
        fontFamily: "Georgia, serif",
        textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
      }}
    >
      Adjust to the object, and you shall find a way around or through it.
    </motion.div>
  );
};

export default SlidingText;

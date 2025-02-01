import "./hero.sass";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
// import TimeDisplay from "../time-display/time-display";

const letterVariants = {
  hidden: { x: -100, opacity: 0, rotate: -10 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      ease: [0.175, 0.885, 0.32, 1.275],
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const jobTitleVariants = {
  hidden: { y: 10, opacity: 0, scale: 1.1 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.2,
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const renderLetters = (name) => {
  if (!name) return null;
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={letterVariants}
      className="inline-block"
    >
      {name.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={letterVariants}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const sliderVariants = {
  initial: {
    x: "20%",
    opacity: 0,
  },
  animate: {
    x: "-300%",
    opacity: [0, 0.7, 0.9],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 9,
      delay: 2,
    },
  },
};

const Hero = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
            marginBlockStart: "1rem",
          }}
        >
          {/* <TimeDisplay /> */}
          <p>Hello, my name is</p>
          <h2> {renderLetters("IKENNA RICHARD")}</h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={jobTitleVariants}
          >
            Software Engineer
          </motion.p>
          <motion.div
            className={`buttons 
            ${isDarkMode ? "border-dark" : null}`}
            style={{
              margin: "2.6em auto",
            }}
          >
            <a href="#contact">
              <button className={isDarkMode ? "text-dark" : null}>
                GET IN TOUCH
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="sliding-text-container"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Content is like water
      </motion.div>
    </div>
  );
};

export default Hero;

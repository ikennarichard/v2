import { motion, useScroll, useTransform } from "framer-motion";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./hero.sass";
import SlidingText from "./SlidingText";

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
        style={{
          fontWeight: '900'
        }}
          key={index}
          // className="inline-block"
          variants={letterVariants}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
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
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            style={{
              fontSize: "clamp(3rem, 6vw, 6rem)",
              fontWeight: "900",
              margin: "0 0 1rem 0",
              letterSpacing: "-0.1px",
            }}
          >
            {" "}
            {renderLetters("IKENNA RICHARD")}
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={jobTitleVariants}
          >
            Forntend Software Engineer
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
      <SlidingText />
    </div>
  );
};

export default Hero;

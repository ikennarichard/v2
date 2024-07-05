import "./hero.sass";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";


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
          }}
        >
          <p>Hello, my name is</p>
          <h2>IKENNA RICHARD</h2>
          <p
          >
            Frontend Engineer
          </p>
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

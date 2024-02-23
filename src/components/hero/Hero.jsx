import './hero.sass';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -10,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
}


const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-190%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 6,
    },
  },
}

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div 
          className="text-container"
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.p variants={textVariants}>Hello, my name is</motion.p>
          <motion.h2 variants={textVariants}>IKENNA RICHARD</motion.h2>
          <motion.p variants={textVariants}>
            Software Engineer
          </motion.p>
          <motion.div 
            className={`buttons 
            ${isDarkMode ?  'border-dark' : null}`}
            variants={textVariants}
          >
            <a href="#contact">
              <motion.button 
                variants={textVariants}
                className={isDarkMode ?  'text-dark' : null}
              >
                GET IN TOUCH
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="sliding-text-container"
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Developer Writer
      </motion.div>
    </div>
  )
}

export default Hero
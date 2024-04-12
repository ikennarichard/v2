import './hero.sass';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -10,
    opacity: 0.3
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
    x: '20%',
    opacity: 0,
  },
  animate: {
    x: '-300%',
    opacity: [0, 0.7, 0.9],
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 9,
      delay: 2
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
          <motion.p 
            variants={textVariants}
          >Hello, my name is</motion.p>
          <motion.h2 variants={textVariants}>IKENNA RICHARD</motion.h2>
          <motion.p variants={textVariants} style={{width: '65%', margin: '0 auto'}}>
            Frontend Engineer specializing in building digital user interfaces with a focus on user experience, accessibility, and performance.
          </motion.p>
          <motion.div 
            className={`buttons 
            ${isDarkMode ?  'border-dark' : null}`}
            variants={textVariants}
            style={{
              margin: '2.6em auto'
            }}
          >
            <a href="#contact">
              <button 
                className={isDarkMode ?  'text-dark' : null}
              >
                GET IN TOUCH
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="sliding-text-container"
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Content is like water
      </motion.div>
    </div>
  )
}

export default Hero
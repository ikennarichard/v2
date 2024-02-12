import { useContext } from 'react';
import { motion } from "framer-motion";
import light from '/icons/light-mode.svg'
import dark from '/icons/dark-mode.svg'
import { ThemeContext } from '../../context/ThemeContext';
import "./themeToggle.sass";

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  const variants = {
    open: {
      clipPath: ['circle(0% at 110px 50px)', 'circle(200vw at 50px 50px)'],
      opacity: 0.1,
      transition: {
        stiffness: 100,
        damping: 30,
      },
      transitionEnd: { visibility: 'hidden'}
    },
    closed: {
      clipPath:  ['circle(100vw at 50px 50px)', 'circle(0% at 110px 50px)'],
      transition: {
        type: 'spring',
        stiffness: 280,
        damping: 30,
      },
    },
  };
  return (
    <motion.div
      initial='closed'
      animate={isDarkMode ? 'open' : 'closed'}
      className='theme-toggle-container'
    >
      <motion.div variants={variants} className="bg">
      </motion.div>
        <motion.button
          className="theme-btn"
          onClick={handleModeChange}
        >
          <img src={isDarkMode ? light : dark} alt="theme icon" />
        </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;

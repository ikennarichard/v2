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
      clipPath: ['circle(0% at 110px 50px)', 'circle(100vw at 110px 50px)', 'circle(0 at 10000px 1000000px)'],
      width: '100%',
      opacity: 0.1,
      transition: {
        duration: 1,
        stiffness: 200,
        damping: 3,
      },
      transitionEnd: { opacity: 0 }
    },
    closed: {
      clipPath:  ['circle(100vw at 50px 50px)', 'circle(0% at 110px 50px)'],
      width: '100%',
      transition: {
        type: 'spring',
        stiffness: 280,
        damping: 30,
      },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -3 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.1, delay: 0.3}}}
      animate={isDarkMode ? 'open' : 'closed'}
      className='theme-toggle-container'
    >
      <motion.div variants={variants} className="theme-bg">
      </motion.div>
        <motion.button
          className="theme-btn"
          onClick={handleModeChange}
        >
          <img width={26} height={26} src={isDarkMode ? light : dark} alt="theme icon" />
        </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;

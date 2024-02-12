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
      clipPath: ['circle(0% at 110px 50px)', 'circle(300vw at 50px 50px)'],
      width: '100%',
      opacity: 0.1,
      transition: {
        stiffness: 100,
        damping: 30,
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: 0.5}}}
      whileInView={isDarkMode ? 'open' : 'closed'}
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

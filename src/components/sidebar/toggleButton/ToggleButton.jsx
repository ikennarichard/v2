/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const ToggleButton = ({ setOpen }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <button onClick={() => setOpen(prev => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path 
          strokeWidth='2' 
          stroke={isDarkMode ? 'black': '#F5F5F5' }
          strokeLinecap="round"
        variants={{
          closed: { d: 'M 3 2.5 L 20 2.5'},
          open: { d: 'M 3 16.5 L 17 2.5'},
        }}
        />
        <motion.path 
          strokeWidth='2'
          stroke={isDarkMode ? 'black': '#F5F5F5' }
          strokeLinecap="round"
        d='M 5 9.423 L 18 9.423'
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        />
        <motion.path
          strokeWidth='2'
          stroke={isDarkMode ? 'black': '#F5F5F5' }
          strokeLinecap="round"
        variants={{
          closed: { d: 'M 8 16.346 L 15 16.346'},
          open: { d: 'M 3 2.5 L 17 16.346'},
        }}
        />
      </svg>
      
    </button>
  )
}

export default ToggleButton
import { motion } from "framer-motion"
import './social.sass'
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

const Social = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const variant = {
    initial: {
      x: 6
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    }
  }
  const linkVariant = {
    initial: {
      scale: 1
    },
    whileHover: {
      scale: 1.12,
      brightness: 1000,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  }
  return (
    <motion.div 
      className="social"
      variants={variant}
      initial= 'initial'
      animate='animate'
    >
      <motion.a 
        href= 'https://linkedin.com/in/ikenna-richard'
        className='social'
        variants={linkVariant}
        initial="initial"
        whileHover="whileHover"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128">
            <path fill={isDarkMode ? "#f1f1f1": "#4b4a4a"} d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3M39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1 1 10.49-10.5a10.5 10.5 0 0 1-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"/>
          </svg>
      </motion.a>

      <motion.a 
        href= 'https://github.com/ikennarichard'
        className='social'
        variants={linkVariant}
        initial="initial"
        whileHover="whileHover"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
          <path fill={isDarkMode ? "#f1f1f1": "#4b4a4a"} d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
        </svg>
      </motion.a>

      <motion.a 
        href= 'https://medium.com/@oguejioforrichard'
        className='social'
        variants={linkVariant}
        initial="initial"
        whileHover="whileHover"
      >
        
       <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24">
          <path d="M4.37 7.3a.75.75 0 0 0-.25-.65L2.25 4.4v-.34h5.8l4.48 9.83l3.94-9.83H22v.34l-1.6 1.53c-.13.1-.2.28-.17.45v11.24c-.03.17.04.35.17.45l1.56 1.53v.34h-7.84v-.34l1.61-1.57c.16-.15.16-.2.16-.44V8.5L11.4 19.9h-.6L5.57 8.5v7.64c-.07.32.06.64.29.86l2.1 2.57v.33H2v-.33L4.1 17a.94.94 0 0 0 .27-.86V7.3z" fill={isDarkMode ? "#f1f1f1": "#4b4a4a"}/>
       </svg>
      </motion.a>

      <motion.a 
        href= 'https://twitter.com/ikennarichard_'
        className='social'
        variants={linkVariant}
        initial="initial"
        whileHover="whileHover"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 512 512">
          <path fill={isDarkMode ? "#f1f1f1": "#4b4a4a"} d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"/>
        </svg>
      </motion.a>
  </motion.div>
  )
}

export default Social
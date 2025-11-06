import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
import Social from '../social/Social';
import './navbar.sass'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const NavBar = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
      <div
        className='navbar'
        style={{
          backgroundColor: isDarkMode ? '#00000061' : '#ffffff99'
        }}
      >
        <div className="wrapper">
        <Sidebar/>
          <motion.div
            initial={{ opacity:0, translateX: '50%'}}
            animate={{ opacity: 1, translateX: "60%", translateY: '10px'}}
            transition={{ duration: 1.5 }}
          >

          </motion.div>
          <motion.div 
            className="social"
            initial={{ oapcity:0, translateX: '12px'}}
            animate={{ opacity: 1, translateX: 0}}
            transition={{ duration: 1.5 }}
          >
            <Social/>
          </motion.div>
        </div>
      </div>
  )
}

export default NavBar
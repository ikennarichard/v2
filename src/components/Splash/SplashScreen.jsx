import { motion } from 'framer-motion'
import './splash.sass'

const SplashScreen = () => {
  return (
    <div 
      className='splash'
    >
      <motion.p 
        initial={{ x: -18, opacity: 0 }}
        animate={{ x: 0, rotateX: '3turn', opacity: 1 }}
        transition={{
          duration: 2,
          ease: 'linear'
        }}
      >
        anything is possible!
      </motion.p>
    </div>
  )
}

export default SplashScreen;
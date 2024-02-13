import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './splash.sass';

const SplashScreen = () => {
  const [isPresent, setIsPresent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPresent(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, [isPresent])

  return (
    <motion.div
      className='splash'
      initial={{ top: '0vh' }}
      animate={{ top: '-100vh' }}
      transition={{ duration: 0.7, ease: "easeInOut", delay: 2.5 }}
    >
      <div className='header'>
        <AnimatePresence>
          {isPresent && (
            <>
              <motion.span
                key="animated-span-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, x: 18, scale: 1.7 }}
                exit={{ opacity: 0, y: -130 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              >
                Anything
              </motion.span>
              <motion.span
                key="animated-span-2"
                initial={{ opacity: 0, y: 20, top: -35 }}
                animate={{ opacity: 1, y: 0, scale: 1.3 }}
                exit={{ opacity: 0, y: -130 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
              >
                is
              </motion.span>
              <motion.span
                key="animated-span-3"
                initial={{ opacity: 0, y: 20, bottom: 30, left: 26 }}
                animate={{ opacity: 1, y: 0,scale:1.2 }}
                exit={{ opacity: 0, y: -130 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
              >
                possible!
              </motion.span>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default SplashScreen;

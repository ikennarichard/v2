import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './splash.sass';

const SplashScreen = () => {
  const [isPresent, setIsPresent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPresent(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isPresent])

  return (
    <motion.div
      className='splash'
      initial={{ top: 0 }}
      animate={{ top: '-100%', opacity: 0}}
      transition={{ duration: 1, ease: "easeInOut", delay: 3}}
    >
      <div className='header'>
        <AnimatePresence>
          {isPresent && (
            <>
              <motion.span
                key="animated-span-1"
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
                transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
              >
                Anything
              </motion.span>
              <motion.span
                key="animated-span-2"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
                style={{
                  color: 'tomato',
                  fontWeight: 'bold'
                }}
              >
                is
              </motion.span>
              <motion.span
                key="animated-span-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 200 }}

                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              >
                possible
              </motion.span>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default SplashScreen;

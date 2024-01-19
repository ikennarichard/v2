import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './cursor.sass';

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0});

  useEffect(() => {
    const mouseMove = (e) => {
      e.stopPropagation();
      setCursorPos({ x: e.clientX, y: e.clientY});
    }

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: '0.9', x: cursorPos.x+9, y: cursorPos.y+9}}
      transition={{
        ease: 'backOut'
      }}
      className="cursor"
    >
      <div 
        className="dot"
      >
          
      </div>
    </motion.div>
  )
}

export default Cursor
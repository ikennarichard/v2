import { useEffect } from "react";
import './cursor.sass';
import { motion, useMotionValue, useSpring } from "framer-motion";


const Cursor = () => {

  const cursorSize = 12;
  const mouse = {
    x: useMotionValue(-100),
    y: useMotionValue(-100),
  }

  function disable() {
    const cursor = document.querySelector('.cursor')
    document.querySelectorAll('button').forEach((item) => {
      item.addEventListener('mouseover', () => {
        cursor.style.visibility = 'hidden'
      })
      item.addEventListener('mouseleave', () => {
        cursor.style.visibility= 'visible'
      })
    })
  }

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5}
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const handleMouseMove = e => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2)
    mouse.y.set(clientY - cursorSize / 2)
    disable();
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])

  return (
    <>
    <motion.div 
      id="cursor"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
    ></motion.div>
    </>
  )
}

export default Cursor
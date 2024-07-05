/* eslint-disable react/prop-types */
import './projects.sass'
import data from './projects.json'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const variants = {
  initial: {
    opacity: 0.8,
    scale: 0.8
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    },
  },
}

const Project = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center", "end start"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 0.5, 0.6, 1], [0.8, 1, 1, 0.6]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.5]);
  return (
    <div className="project">
      <motion.div className="wrapper" 
        initial='initial' 
        whileInView='animate'>
        <motion.div
          className='heading-container'
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress
          }}
        >
          <motion.h2 className='project-heading' variants={variants}>Selected Projects</motion.h2>

          <motion.div variants={variants} className='links-list'>
            <ul>
              {
                data.projects.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.title}`}  className='project-links' >
                      {item.title.toLowerCase()}
                    </a>
                  </li>
                  
                ))
              }
            </ul>
          </motion.div>
        </motion.div>
        </motion.div>
      </div>
  )
}

export default Project
/* eslint-disable react/prop-types */
import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import data from './projects.json'
import './projectslist.sass'


const Project = ({ item }) => {

  return (
    <motion.section
      initial="hidden"
      whileHover="visible"
      // viewport={{ once: true }}
      transition={{ duration: 0.9, ease: 'easeInOut'}}
      variants={{
      visible: { x: 0, scale: 0.9 },
      hidden: { x: 6, scale: 0.89 }
      }}
      className='project-card'
    >
      <img 
        src={item.image} 
        alt="project image" 
        className="image"
        width='auto'
        height='auto'
      />
      <div className="details">
        <h2>{item.title}</h2>
        <p className='description'>{item.description}</p>
        <div className="buttons">
          <a href={item.source} rel="noreferrer" target="_blank">
            <button className="source">source
            </button>
          </a>
          <a href={item.live_demo} rel="noreferrer" target="_blank">
            <button className="live-demo">live-demo
            </button>
          </a>
        </div>
      </div>
    </motion.section>
  )

}

const ProjectList = () => {
  
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const scaleX = useSpring(scrollYProgress, {
    // stiffness: 100,
    // damping: 30,
    // restDelta: 0.001
  });

  return (
    <div>
      <motion.ul ref={ref}>
        <motion.div 
          className="progress-bar"
          style={{ scaleX }}
        />
          {
            data.projects.map((item) => (
              <li 
              key={item.id} 
              className="project-container" 
              id={item.title}>
                <Project item={item} title={item.title} />
              </li>
            ))
          }
        </motion.ul>
    </div>
  )
}

export default ProjectList
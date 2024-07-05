/* eslint-disable react/prop-types */
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import data from './projects.json'
import './projectslist.sass'


const Project = ({ item }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center", "end start"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 0.5, 0.6, 1], [0.8, 1, 1, 0.6]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.5]);

  return (
    <motion.section
      initial="hidden"
      whileHover="visible"
      transition={{ duration: 0.9, ease: 'easeInOut'}}
      variants={{
        visible: { x: 0, scale: 0.9 },
        hidden: { x: 6, scale: 0.89 }
      }}
      className='project-card'
      
    >
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress
        }}
        className="wrapper"
      >
        <img
          src={item.image}
          alt="project image"
          className="image"
          width='100%'
          height='100%'
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
      </motion.div>
    </motion.section>
  )

}

const ProjectList = () => {

  return (
    <div>

      <motion.ul className="list">
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
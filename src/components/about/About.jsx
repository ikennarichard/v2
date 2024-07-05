import { motion } from 'framer-motion'
import './about.sass'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'

const About = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center", "end start"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 0.5, 0.6, 1], [0.8, 1, 1, 0.6]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.5]);
  return (
    <div className="about">
      <div className="wrapper">
        <div 
          className="info"
          
        >
          <ul>
            <li><p>HTML/CSS</p></li>
            <li><p>JavaScript / TypeScript</p></li>
            <li><p>React</p></li>
            <li><p>Astro</p></li>
            <li><p>Redux</p></li>
            <li><p>Bootstrap</p></li>
            <li><p>Tailwind CSS</p></li>
            <li><p>SASS</p></li>
            <li><p>Git / Github</p></li>
            <li><p>Jest / Vitest / React Testing Library</p></li>
          </ul>
        </div>
        <motion.div 
          className="details"
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress
          }}
        >
          <h2>ABOUT</h2>
          <div className="text">
          <p>My journey in technology has been a thrilling adventure, particularly since joining the Microverse software development bootcamp. It was there that I discovered my passion for creating user interfaces, leading me to specialize in frontend development with React, Astro and Redux.</p>

          <p>In addition to my frontend focus, I&apos;ve also gained valuable experience with backend technologies like Ruby on Rails, Express.js, and PostgreSQL. My full-stack background has given me the skills to seamlessly blend frontend and backend components.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
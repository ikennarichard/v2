import { motion } from 'framer-motion'
import './about.sass'

const variant = {
  initial: {
    x: 10,
    opacity: 0.6,
  },

  animate: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 2,
      staggerChildren: 0.1
    }
  }
}

const About = () => {
  return (
    <div className="about">
      <div className="wrapper">
        <motion.div 
          initial='initial' 
          whileInView='animate'
          variants={variant} 
          className="info"
        >
          <ul>
            <li><p>HTML/CSS</p></li>
            <li><p>JavaScript / TypeScript</p></li>
            <li><p>React</p></li>
            <li><p>Astro</p></li>
            <li><p>Redux</p></li>
            <li><p>Node.js</p></li>
            <li><p>Go</p></li>
            <li><p>Ruby on Rails</p></li>
            <li><p>Express.js</p></li>
            <li><p>Bootstrap</p></li>
            <li><p>Tailwind CSS</p></li>
            <li><p>SASS</p></li>
            <li><p>Git / Github</p></li>
            <li><p>Jest / Vitest / React Testing Library</p></li>
          </ul>
          <a href="Ikenna_Richard_Resume.pdf" target="_blank" rel="noopener noreferrer" download="" className='resume-link'>
            <button className='get-resume' type="button">
							Get my CV
						</button>
          </a>
        </motion.div>
        <div className="details">
          <h2>ABOUT</h2>
          <div className="text">
          <p>My journey in technology has been a thrilling adventure, particularly since joining the Microverse software development bootcamp. It was there that I discovered my passion for creating user interfaces, leading me to specialize in frontend development with React, Astro and Redux.</p>

          <p>In addition to my frontend focus, I&apos;ve also gained valuable experience with backend technologies like Ruby on Rails, Express.js, and PostgreSQL. My full-stack background has given me the skills to seamlessly blend frontend and backend components.</p>

          <p>What excites me most about my job is being able to create things that provide high value to people.</p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
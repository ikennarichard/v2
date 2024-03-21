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
            <li><p>Pair programming</p></li>
            <li><p>Agile kanban development process</p></li>
            <li><p>RESTFul API</p></li>
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
            <p>My journey into tech took an exciting turn when I joined the Microverse software development bootcamp. Since then, I fell in love with React and Redux and have been using them ever since in web applications.</p>
            <p>In addition to React, I have experience working with backend technologies such as Ruby on Rails, Express.js and PostgreSQL.</p>
            <p>What excites me most about my job is being able to create things that provide high value to people.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
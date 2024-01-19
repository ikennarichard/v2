import { socialLinks } from "./socialLinks"
import { motion } from "framer-motion"
import './social.sass'

const Social = () => {
  const variant = {
    initial: {
      x: 6
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    }
  }
  return (
    <motion.div 
      className="social"
      variants={variant}
      initial= 'initial'
      animate='animate'
    >
      {
        socialLinks.map((link) => (
          <a 
            href={link.href} 
            key={link.platform}
            className='social'
          >
            <img src={link.icon} alt={link.platform} />
          </a>
        ))
      }
  </motion.div>
  )
}

export default Social
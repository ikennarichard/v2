import Social from "../social/Social"
import { motion, useScroll, useTransform } from "framer-motion"
import './contact.sass'
import { useRef } from "react"

const Contact = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.div 
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      ref={ref}
      className='contact'
    >
        <motion.div
          
          initial={{ x: 6}}
          whileInView={{
            x: 0
          }}
          transition={{ duration: 1}}
          className="text-container"
        >
        <h2>Lets work together</h2>
        <div className="contact-item">
          <h2>Mail</h2>
          <span>oguejioforrichard@gmail.com</span>
        </div>
        <div className="contact-item">
          <h2>Phone</h2>
          <span>+2347085748219</span>
        </div>
        <div className="socials">
          <Social/>
        </div>
      </motion.div>

      {/* form container */}
      <div className="form-container">
        <motion.form
          action="https://formspree.io/f/xbjeoyol" 
          method="post"
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1}}
        >
          
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="me@mail.com" />
          <textarea required name="message" rows="6" placeholder="Message"></textarea>
          <button  className="contact-btn">
            <span data-text='SEND'>SEND</span>
          </button>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact
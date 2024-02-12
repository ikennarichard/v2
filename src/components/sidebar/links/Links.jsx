import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0
  },
};
const Links = () => {
  const links = ['home', 'about','projects', 'contact'];

  return (
    <motion.div 
      className="links"
      variants={variants}
    >
      {
        links.map((link) => (
          <motion.a 
            href={`#${link}`}
            key={`#${link}`}
            variants={itemVariants}
            className="nav-link"
          >
            {link}
          </motion.a>
        ))
      }
    </motion.div>
  )
}

export default Links
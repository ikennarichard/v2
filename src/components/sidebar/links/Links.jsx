import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      ease: "easeInOut",
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
  closed: {
    transition: {
      ease: "easeInOut",
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "linear",
    },
  },
  closed: {
    y: 5,
    opacity: 0,
  },
};
const Links = () => {
  const links = [
    { title: "home", url: "#home" },
    { title: "about", url: "#about" },
    { title: "contact", url: "#contact" },
    { title: "blog", url: "blog-tau-eight-36.vercel.app" },
  ];

  return (
    <motion.div className="links" variants={variants}>
      {links.map((link) => (
        <motion.a
          href={`#${link}`}
          key={`#${link}`}
          variants={itemVariants}
          className="nav-link"
        >
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;

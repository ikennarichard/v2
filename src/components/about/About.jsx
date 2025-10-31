import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import "./about.sass";
import data from "./projects.json";

const techStack = [
  "React Native",
  "Expo",
  "TypeScript",
  "Tailwind CSS",
  "React.js",
  "Next.js",
  "Node.js",
  "Docker",
  "Git",
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const skillVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

const linkVariants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
  hover: {
    x: 10,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const About = () => {
  const ref = useRef();
  const skillsRef = useRef();
  const linksRef = useRef();

  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const isLinksInView = useInView(linksRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.7, 1, 1, 0.8]
  );

  const opacityProgress = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.6]
  );

  const yProgress = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  const rotateProgress = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);

  const projectLinks = useMemo(
    () =>
      data.projects.map((item, index) => (
        <motion.p
          style={{
            width: 200,
          }}
          key={item.id}
          variants={linkVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          custom={index}
        >
          <a
            href={item.live_demo}
            className="project-links"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title.toLowerCase()}
          </a>
        </motion.p>
      )),
    []
  );

  return (
    <div className="about">
      <div className="wrapper">
        <div className="info">
          <div>
            <h3
              style={{
                marginBottom: "6px",
                fontSize: "1.5rem",
                fontWeight: "700",
              }}
            >
              Tech Stack
            </h3>
            <motion.ul
              ref={skillsRef}
              className="tech-list"
              variants={containerVariants}
              initial="initial"
              animate={isSkillsInView ? "animate" : "initial"}
            >
              {techStack.map((tech, index) => (
                <motion.li
                  key={tech}
                  variants={skillVariants}
                  custom={index}
                  style={{
                    padding: "8px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span>{tech}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            ref={linksRef}
            initial="initial"
            animate={isLinksInView ? "animate" : "initial"}
            variants={containerVariants}
          >
            <motion.h3
              initial={{ opacity: 0, y: 2 }}
              animate={
                isLinksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 1 }
              }
              transition={{ delay: 0.2 }}
              style={{
                marginBottom: "3px",
                fontSize: "1.5rem",
                fontWeight: "700",
              }}
            >
              Selected Work
            </motion.h3>
            <div
              style={{
                flexDirection: "column",
              }}
            >
              {projectLinks}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="details"
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
            y: yProgress,
            rotate: rotateProgress,
            transformOrigin: "center center",
          }}
          initial={{
            willChange: "transform, opacity",
            filter: "blur(10px)",
          }}
          animate={{
            filter: "blur(0px)",
            transition: { duration: 1, ease: "easeOut" },
          }}
          onAnimationComplete={() => {
            if (ref.current) {
              ref.current.style.willChange = "auto";
            }
          }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: "900",
              margin: "0 0 1rem 0",
              letterSpacing: "-0.05em",
            }}
          >
            ABOUT
          </motion.h2>

          <div className="text">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.7",
              }}
            >
              Hey! I&apos;m a frontend software engineer, UI Enthusiast, curious
              builder and eternal tinkerer.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.7",
              }}
            >
              I&apos;m always looking to collaborate with people who want to build
              cool things.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

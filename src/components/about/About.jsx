import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./about.sass";
import { projects } from "./projects";

export default function About() {
  const techStack = [
    "Reactjs",
    "React Native/Expo",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "Framer Motion",
  ];

  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const isProjectsInView = useInView(projectsRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yProgress = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotateProgress = useTransform(scrollYProgress, [0, 1], [0, -5]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };
  const projectLinks = projects.map((project, index) => (
    <motion.div
      key={project.title}
      className="project-link"
      variants={skillVariants}
      custom={index}
      whileHover={{
        x: 5,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 0",
        transition: "all 0.3s ease",
      }}
    >
      <span style={{ fontSize: "1.1rem", fontWeight: "500" }}>
        {project.title}
      </span>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <motion.a
          href={project.source}
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="project-source"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            opacity: 0.7,
          }}
          aria-label="View source code"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </motion.a>
        <motion.a
          href={project.url}
          whileHover={{ scale: 1.2, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            opacity: 0.7,
          }}
          aria-label="View live site"
          className="project-source"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  ));

  return (
    <div className="about">
      <div
        className="wrapper"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px" }}
      >
        {/* Hero Section */}
        <motion.div
          className="details"
          ref={heroRef}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
            y: yProgress,
            rotate: rotateProgress,
            transformOrigin: "center center",
            // marginBottom: '10px'
          }}
          initial={{
            filter: "blur(10px)",
          }}
          animate={{
            filter: "blur(0px)",
            transition: { duration: 1, ease: "easeOut" },
          }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.02,
              letterSpacing: "-0.03em",
              transition: { duration: 0.3 },
            }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: "900",
              margin: "3rem 0 2rem 0",
              letterSpacing: "-0.05em",
              textAlign: "center",
              cursor: "default",
            }}
          >
            ABOUT
          </motion.h2>

          <div className="text" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.7",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Hey! I&apos;m a frontend software engineer, UI Enthusiast, curious
              builder and eternal tinkerer.
            </motion.p>
          </div>
        </motion.div>

        <div
          style={{
            marginBottom: "30px",
            margin: "0 auto",
            maxWidth: "600px",
            overflow: "hidden",
          }}
        >
          <div
            ref={skillsRef}
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <motion.div
              animate={{
                x: "-50%",
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              style={{
                display: "flex",
                gap: "48px",
                width: "max-content",
                marginBlockEnd: 12,
              }}
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <motion.div
                  key={`${tech}-${index}`}
                  whileHover={{
                    opacity: 0.9,
                    transition: {
                      opacity: { duration: 0.3 },
                      rotate: { duration: 0.3 },
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: "16px 24px",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Selected Work Section */}
        <motion.div
          ref={projectsRef}
          initial="initial"
          animate={isProjectsInView ? "animate" : "initial"}
          variants={containerVariants}
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 auto",
              width: "100%",
              maxWidth: 250,
            }}
          >
            {projectLinks}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

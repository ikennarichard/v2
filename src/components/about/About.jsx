import { motion } from "framer-motion";
import "./about.sass";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const About = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center", "end start"],
  });

  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 1],
    [0.8, 1, 1, 0.6]
  );
  const opacityProgress = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 0.5]
  );

  return (
    <div className="about">
      <div className="wrapper">
       
        <div className="info">
          <ul>
            <li>
              <p>HTML/CSS</p>
            </li>
            <li>
              <p>JavaScript / TypeScript</p>
            </li>
            <li>
              <p>Reactjs</p>
            </li>
            <li>
              <p>React Native</p>
            </li>
            <li>
              <p>Nextjs</p>
            </li>
            <li>
              <p>Go</p>
            </li>
            <li>
              <p>Firebase</p>
            </li>
            <li>
              <p>Supabase</p>
            </li>
            <li>
              <p>Zustand</p>
            </li>
            <li>
              <p>Redux</p>
            </li>
            <li>
              <p>Tailwind CSS</p>
            </li>
            <li>
              <p>SASS</p>
            </li>
            <li>
              <p>Git / Github</p>
            </li>
            <li>
              <p>Jest / Vitest / React Testing Library</p>
            </li>
          </ul>
          <span
            style={{
              fontSize: "6rem",
            }}
          >
            ...
          </span>
        </div>
        <motion.div
          className="details"
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
        >
          <h2>ABOUT</h2>
          <div className="text">
            <p>
              Hi, I am Ikenna Richard, a software engineer based in Nigeria.
              HNG-trained and obsessed with high-performance UIs with precision
              & style, I make sure every UI feels just right. I tweak, tinker,
              and optimize—because great experiences shouldn’t just work, they
              should wow! 🚀
            </p>

            <p>
              I&apos;ve also gained valuable experience with backend
              technologies like Ruby on Rails, Go, and PostgreSQL. My approach
              is holistic; I believe in collaboration 🎭, from UI/UX designers
              to backend developers, to create a cohesive and impactful
              product.⚡
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

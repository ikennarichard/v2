import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import "./contact.sass";

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
      delay: 0.6,
    },
  },
};

const formVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.12,
      delayChildren: 1.2,
    },
  },
};

const inputVariants = {
  initial: {
    opacity: 0,
    x: -30,
    scale: 0.96,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
  focus: {
    scale: 1.01,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

const buttonVariants = {
  initial: { opacity: 0, scale: 0.85, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
  tap: { scale: 0.97 },
};

const headingVariants = {
  initial: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      mass: 1.2,
      delay: 0.2,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const textRef = useRef();
  const formRef = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const isTextInView = useInView(textRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center"],
    layoutEffect: false,
  });

  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.85, 1, 1, 1]
  );
  const opacityProgress = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.6, 1, 1, 1]
  );

  const yProgress = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(e.target.action, {
        method: e.target.method,
        body: new FormData(e.target),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 3000);
    }
  };
  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        y: yProgress,
        transformOrigin: "center center",
      }}
      ref={ref}
      initial={{ willChange: "transform, opacity" }}
      onAnimationComplete={() => {
        if (ref.current) {
          ref.current.style.willChange = "auto";
        }
      }}
      className="contact"
    >
      <motion.div
        ref={textRef}
        variants={containerVariants}
        initial="initial"
        animate={isTextInView ? "animate" : "initial"}
        className="text-container"
      >
        <motion.h2
          variants={headingVariants}
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: "900",
            letterSpacing: "-0.02em",
            marginBlockEnd: 20,
          }}
        >
          CONTACT
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="contact-item"
          whileHover={{
            x: 5,
            transition: { type: "spring", stiffness: 300, damping: 25 },
          }}
          style={{
            cursor: "default",
          }}
        >
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "0.5rem",
            }}
          >
            Mail
          </h3>
          <motion.span
            style={{
              fontSize: "1rem",
            }}
          >
            oguejioforrichard@gmail.com
          </motion.span>
        </motion.div>
      </motion.div>

      {/* form container */}
      <div className="form-container">
        <motion.form
          action="https://formspree.io/f/xbjeoyol"
          method="post"
          ref={formRef}
          onSubmit={handleSubmit}
          variants={formVariants}
          initial="initial"
          animate={isFormInView ? "animate" : "initial"}
          style={{
            marginTop: 10,
          }}
        >
          <motion.input
            variants={inputVariants}
            whileFocus="focus"
            type="text"
            placeholder="Name"
            required
          />
          <motion.input
            variants={inputVariants}
            whileFocus="focus"
            type="email"
            placeholder="Enter your email address"
          />
          <motion.textarea
            variants={inputVariants}
            whileFocus="focus"
            required
            name="message"
            rows="6"
            placeholder="Message"
          ></motion.textarea>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            disabled={isSubmitting}
            className="contact-btn"
          >
            <motion.span
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              data-text={isSubmitting ? "SENDING..." : "SEND"}
            >
              {isSubmitting ? "SENDING..." : "SEND"}
            </motion.span>
          </motion.button>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              style={{
                marginTop: "1rem",
                padding: "0.75rem",
                borderRadius: "8px",
                textAlign: "center",
                fontSize: "0.9rem",
                background:
                  submitStatus === "success"
                    ? "rgba(34, 197, 94, 0.9)"
                    : "rgba(239, 68, 68, 0.9)",
                color: "white",
                border: `1px solid ${
                  submitStatus === "success"
                    ? "rgba(34, 197, 94, 0.6"
                    : "rgba(239, 68, 68, 0.6)"
                }`,
              }}
            >
              {submitStatus === "success"
                ? "Message sent successfully! I'll get back to you soon."
                : "Failed to send message. Please try again."}
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;

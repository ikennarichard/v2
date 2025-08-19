import { motion } from "framer-motion";
import { useCallback, useRef, useState, useEffect } from "react";
import Links from "./links/Links";
import "./sidebar.sass";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(23px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 295,
      damping: 30,
      delay: 0.6,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleClickOutside = useCallback((e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open, handleClickOutside]);

  const toggleOpen = useCallback(() => setOpen((prev) => !prev), []);

  return (
    <motion.div
      ref={sidebarRef}
      className="sidebar"
      initial="closed"
      animate={open ? "open" : "closed"}
    >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={toggleOpen} />
    </motion.div>
  );
};

export default Sidebar;

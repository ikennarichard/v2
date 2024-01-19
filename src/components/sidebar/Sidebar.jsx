import { useState } from 'react';
import Links from './links/Links';
import ToggleButton from './toggleButton/ToggleButton';
import './sidebar.sass';
import { motion } from 'framer-motion';

const variants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px',
    transition: {
      type: 'spring',
      stiffness: 20,
    }
  },
  closed: {
    clipPath: 'circle(23px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div 
      className='sidebar'
      initial='closed'
      animate={open ? 'open' : 'closed'}
    >
      <motion.div className='bg' variants={variants}>
        <Links/>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
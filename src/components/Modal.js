import React from 'react';
import { motion } from 'framer-motion';

// Motion Styles
const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

export const Modal = (props) => {
  //   console.log('in the modal');
  //   console.log(props);

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      props.setSelectedImg(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={props.selectedImg}
        alt="Expanded pic"
        // initial={{ y: '-100vh' }}
        // animate={{ y: 0 }}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
    </motion.div>
  );
};

export default Modal;

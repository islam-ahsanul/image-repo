import React from 'react';
import { motion } from 'framer-motion';

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
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        // animate={{ x: 100 }}
        // initial={false}
      />
    </motion.div>
  );
};

export default Modal;

import React from 'react';

export const Modal = (props) => {
  //   console.log('in the modal');
  //   console.log(props);

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      props.setSelectedImg(null);
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={props.selectedImg} alt="Expanded pic" />
    </div>
  );
};

export default Modal;

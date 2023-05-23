import React from 'react';

export const Modal = (props) => {
  //   console.log('in the modal');
  //   console.log(props);
  return (
    <div className="backdrop">
      <img src={props.selectedImg} alt="Expanded pic" />
    </div>
  );
};

export default Modal;

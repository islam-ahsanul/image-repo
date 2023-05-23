import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { motion } from 'framer-motion';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const allowedTypes = ['image/jpeg', 'image/png'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select a valid image file (png or jpeg)');
    }
  };
  return (
    <form>
      <motion.label whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </motion.label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;

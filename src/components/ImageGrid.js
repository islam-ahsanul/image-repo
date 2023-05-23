import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

export const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  //   console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        // docs.map((doc) => (
        //   <div className="img-wrap" key={doc.id}>
        //     <img src={doc.url} alt="Failed to load" />
        //   </div>
        // ))

        docs.map(function (doc, index) {
          if (index % 2 === 0) {
            return (
              <motion.div
                className="img-wrap"
                key={doc.id}
                onClick={() => {
                  setSelectedImg(doc.url);
                  //   console.log(doc.url);
                }}
                whileHover={{ opacity: 1 }}
                layout
              >
                <motion.img
                  src={doc.url}
                  alt="Failed to load"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />
              </motion.div>
            );
          }
        })}
    </div>
  );
};

export default ImageGrid;

import React from 'react';
import useFirestore from '../hooks/useFirestore';

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
              <div
                className="img-wrap"
                key={doc.id}
                onClick={() => {
                  setSelectedImg(doc.url);
                  //   console.log(doc.url);
                }}
              >
                <img src={doc.url} alt="Failed to load" />
              </div>
            );
          }
        })}
    </div>
  );
};

export default ImageGrid;

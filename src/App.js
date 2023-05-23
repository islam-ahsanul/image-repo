import React, { useState } from 'react';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  // console.log(selectedImg);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} />}
    </div>
  );
}

export default App;

//https://www.youtube.com/watch?v=vUe91uOx7R0&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=27

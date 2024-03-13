import React, { useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const images = [
  "http://127.0.0.1:5500/media/1123a359fa0f8a0fd252c8a28276c886/015-at-2x-half.jpg",
  "http://127.0.0.1:5500/media/00b4b00bb3747efc39e2e039c688ea00/014-at-2x-half.jpg",
  'http://127.0.0.1:5500/media/30b921f775b640114f1e5594e2e13ae3/016-at-2x-half.jpg',
  "http://127.0.0.1:5500/media/63220e3d1aa7c1eb576fcb6d3e57b2d1/013-at-2x-half.jpg",
  "http://127.0.0.1:5500/media/3820d9c5a36f3d37aefd83c7b2be4695/021-at-2x-half.jpg",
  "http://127.0.0.1:5500/media/c7a4b92255dd97ffd0122a94e3536d6d/032-1-at-2x-half.jpg",
  "http://127.0.0.1:5500/media/7291a20c340e91798c73ea307dd4a4b0/002-at-2x-half.jpg"
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div style={{ position: 'relative' }}>
      <img src={images[index]} alt="Gallery" style={{ width: '100%', height: 'auto' }} />
      <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-l-md z-10">
        <WestIcon style={{ fontSize: '40px', color: 'white' }} />
      </button>
      <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-r-md z-10">
        <EastIcon style={{ fontSize: '40px', color: 'white' }} />
      </button>
    </div>
  );
}

export default Gallery;

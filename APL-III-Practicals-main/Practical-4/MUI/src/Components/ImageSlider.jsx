import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import cycle from './images/cycle.jpg';
import home from './images/home.jpg';

const ImageSlider = () => {
  const images = [cycle, home];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <img src={images[currentIndex]} alt="slider" width={300} style={{ borderRadius: 10 }} />

      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained" color="secondary" onClick={handlePrev}>
          Previous
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ImageSlider;

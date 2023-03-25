import React from 'react';
import { Box } from '@mui/material';

const images = importAll(require.context('../Assets/img/slides/', false, /\.(png|jpg)$/));

export default function DemoSlides() {
  return (
    <Box>
      Demo Slides
      {images.map((image, index) => (
        <img key={index} src={image.default} alt={image.fileName} />
      ))}
    </Box>
  );
}

function importAll(r) {
  return r.keys().map((fileName) => ({
    fileName,
    default: r(fileName),
  }));
}

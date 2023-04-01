import React from 'react';
import { Box } from '@mui/material';

const images = importAll(require.context(`${process.env.PUBLIC_URL}/public/img/slides/`, false, /\.(svg|jpg)$/));

export default function DemoSlides() {
  return (
    <Box>
      Demo Slides tell a story, even if it includes upcoming features + Responsible AI slide
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

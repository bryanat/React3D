import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

export default function InputRow(props) {
  const [boxWidth, setboxWidth] = useState(0);
  const [boxLength, setboxLength] = useState(0);
  const [boxHeight, setboxHeight] = useState(0);
  const [boxCount, setboxCount] = useState(0);

  // perform any logic before setting new box width
  const handleboxWidthChange = (event) => {
    setboxWidth(event.target.value);
  };

  // perform any logic before setting new box length
  const handleboxLengthChange = (event) => {
    setboxLength(event.target.value);
  };

  // perform any logic before setting new box height
  const handleboxHeightChange = (event) => {
    setboxHeight(event.target.value);
  };

  // perform any logic before setting new box count
  const handleboxCountChange = (event) => {
    setboxCount(event.target.value);
  };

  const handleboxCountIncrement = () => {
    setboxCount(boxCount + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Width: ${boxWidth}\nLength: ${boxLength}\nHeight: ${boxHeight}\nCount: ${boxCount}`);
  };

  return (
    <Box sx={{ bgcolor: props.color }}>
      <TextField
        required
        id="boxWidth"
        label="Width"
        value={boxWidth}
        onChange={handleboxWidthChange}
      />
      <TextField
        required
        id="boxLength"
        label="Length"
        value={boxLength}
        onChange={handleboxLengthChange}
      />
      <TextField
        required
        id="boxHeight"
        label="Height"
        value={boxHeight}
        onChange={handleboxHeightChange}
      />
      <TextField
        required
        id="boxCount"
        label="Count"
        value={boxCount}
        onChange={handleboxCountChange}
      />
      <Button onClick={handleboxCountIncrement} variant="contained">+</Button>
    </Box>
  );
}


import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import InputRow from './InputRow';
import colors from '../colors'

export default function InputTable() {
  const [rowCount, setrowCount] = useState(0);

  const handleClick = () => {
    setrowCount(rowCount + 1);
  };

  const components = [...Array(rowCount)].map((_, index) => {
    return(
      <InputRow color='#ffffff' />
    )
    // <TextField key={index} label={`Component ${index + 1}`} />
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`Width: ${boxWidth}\nLength: ${boxLength}\nHeight: ${boxHeight}\nCount: ${boxCount}`);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { m: 1, width: '20vw' } }}>
      <InputRow color="#ffffff"/>
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </Box>
  );
}

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
    const reindex = index % 9;
    // const keyname = Object.keys(colors)[0]; // 'one'
    const colorkey = Object.keys(colors)[0 + reindex]; // 'one'
    return(
      <InputRow color={colors[colorkey].main} />
    )
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`Width: ${boxWidth}\nLength: ${boxLength}\nHeight: ${boxHeight}\nCount: ${boxCount}`);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { m: 1, width: '20vw' } }}>
      <Button variant="contained" onClick={handleClick}>
        Add Box Type
      </Button>
      <InputRow color="#181a1b"/>
      {components}
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </Box>
  );
}

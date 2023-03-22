import React from 'react';
import { Box } from '@mui/material';

export default function Explain(props) {

  return (
    <Box>
        <Box>Picture {props.data}</Box>
        <Box>Caption {props.data}</Box>
        <Box>Explaination {props.data}</Box>
    </Box>
  );
}

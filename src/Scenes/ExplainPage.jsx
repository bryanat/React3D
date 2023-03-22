import React from 'react';
import { Box } from '@mui/material';
import Explain from './Explain';
import CardOne from './CardOne';

export default function ExplainPage() {

  return (
    <Box>
        <CardOne title="Unity ML-Agents"/>
        <Box>Seachbox</Box>
        <Box>Tagcloud (ML, RL, cloud/deployment/devops, C#/OOP)</Box>
        <Box>Table of contents</Box>
        <Explain data="1"/>
        <Explain data="2"/>
        <Explain data="3"/>
    </Box>
  );
}

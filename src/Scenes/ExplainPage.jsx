import React from 'react';
import { Box } from '@mui/material';
import Explain from './Explain';
import CardOne from './CardOne';

export default function ExplainPage() {

  return (
    <Box>
        <CardOne title="Unity ML-Agents"/>
        {/* <Box>Cards: Data: Data generator from random box spawner</Box>
        <Box>Cards: Production: multiple pipelines running in parallel, one current pipeline running inference while another pipeline testing new experiments and configurations </Box>
        <Box>Cards: Production: validation: having an out of sample test data (.json box set for validation, that is separate from the data used to train)  </Box>
        <Box>Cards: MLOps: automation: automated deployment pipeline enabling quicker experimentation/iteration in our goal for greater generalization (accuracy)  </Box>
        <Box>Seachbox</Box>
        <Box>Tagcloud (ML, RL, cloud/deployment/devops, C#/OOP)</Box>
        <Box>Table of contents</Box>
        <Explain data="1"/>
        <Explain data="2"/>
        <Explain data="3"/> */}
    </Box>
  );
}

import React from 'react';
import { Box } from '@mui/material';
import CardTemplate from './CardTemplate';
import imgsolutionevolutiontree from '../Assets/Solution_Evolution_Tree.svg'
import jsonData from '../Assets/cards-yueqi.json'

export default function AppendixCards() {

  return (
    <Box sx={{ marginTop: 4, marginLeft: 30, marginRight: 30 }}>
        <img src={imgsolutionevolutiontree} />
        {jsonData.props.map((card) => (
          <CardTemplate
            title={card.title}
            tags={card.tags}
            image={card.image}
            caption={card.captiontext}
            more={card.moretext}
          />
        ))}
        
        {/* <Box>Cards: Data: Data generator from random box spawner</Box>
        <Box>Cards: Production: multiple pipelines running in parallel, one current pipeline running inference while another pipeline testing new experiments and configurations </Box>
        <Box>Cards: Production: validation: having an out of sample test data (.json box set for validation, that is separate from the data used to train)  </Box>
        <Box>Cards: MLOps: automation: automated deployment pipeline enabling quicker experimentation/iteration in our goal for greater generalization (accuracy)  </Box>
        <Box>Seachbox</Box>
        <Box>Tagcloud (ML, RL, cloud/deployment/devops, C#/OOP)</Box>
        <Box>Table of contents</Box>
        */}
    </Box>
  );
}

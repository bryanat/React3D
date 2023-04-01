import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Will read props from file 

export default function CardTemplate(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card sx={{ maxWidth: '100vw' }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.subheader}
      />
      <CardMedia
        component="img"
        height="400"
        image={`${process.env.PUBLIC_URL}/img/${props.image}`}
        alt="image not found"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.caption}
        </Typography>
      </CardContent>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="unitymla-content"
          id="unitymla-header"
        >
          <Typography>More about {props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.more}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
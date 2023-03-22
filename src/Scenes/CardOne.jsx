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
import unitymla from '../Assets/img/unity-mla.png';

export default function CardOne(props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card sx={{ maxWidth: '100vw' }}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Unity ML-Agents"
                subheader="Training"
            />
            <CardMedia
                component="img"
                height="400"
                image={unitymla}
                alt="Unity ML-Agents"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Unity ML-Agents is a deep reinforcement learning framework built on top of Unity,
                    enabling both deep learning pytorch models and gym reinforcement learning trainers.
                    Shown: run `mlagents-learn` command to start training our RL agent.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Card>
    );
}
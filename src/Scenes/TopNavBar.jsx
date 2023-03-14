import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function TopNavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          My App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavBar;

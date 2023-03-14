import React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

function TabsTest() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Tab 1" sx={{ color: 'primary.contrastText' }} />
        <Tab label="Tab 2" sx={{ color: 'primary.contrastText' }} />
        <Tab label="Tab 3" sx={{ color: 'primary.contrastText' }} />
      </Tabs>
    </AppBar>
  );
}

export default TabsTest;

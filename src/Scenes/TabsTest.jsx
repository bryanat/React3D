import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

function TabsTest() {
  const [value, setValue] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    // <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
    // <AppBar />

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Item One" value="1" />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
        </TabList>
      </Box>
      <TabPanel value="1">Item One</TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
    </TabContext>
  );
}

export default TabsTest;

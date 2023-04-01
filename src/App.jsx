// import './Assets/App.css'
import React from 'react'
import { useTransition } from 'react';
import OutputScene3D from './Scenes/OutputScene3D';
import SceneTensor from './Scenes/SceneTensor';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import InputTable from './Scenes/InputTable';
import InputScene3D from './Scenes/InputScene3D';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import AppendixCards from './Scenes/AppendixCards';
import DemoSlides from './Scenes/DemoSlides';
import { FbxContextProvider } from './Scenes/FbxContext';

// import { FbxContext } from "./Scenes/FbxContext";
// const { count } = React.useContext(FbxContext)



export default function App() {

  const [value, setValue] = React.useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#181a1b',
      },
  }
  });

  return (
    <div className="App" style={{ width: '100%', height: '100vh' }}>
      <ThemeProvider theme={theme}>
        <FbxContextProvider>
          <CssBaseline />
          <TabContext value={value}>

          <Box sx={{
  borderBottom: 1,
  borderColor: 'divider',
  position: 'fixed',
  backgroundColor: theme.palette.background.default,
  zIndex: 2,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}}>

              <TabList onChange={handleChange} >
                <Tab label="One (Slides)" value="1" />
                <Tab label="Two (Demo)" value="2" />
                <Tab label="Three (Tensorboard)" value="3" />
                <Tab label="Four (Appendix Cards)" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <DemoSlides />
            </TabPanel>
            <TabPanel value="2">
              Item 1
              <InputTable />
            </TabPanel>
            <TabPanel value="3">
              Item 2 (peak into backend (videos, gifs, training performance, graphs, tensorboard))
              <SceneTensor />
            </TabPanel>
            <TabPanel value="4">
                <AppendixCards />
            </TabPanel>
          </TabContext>
              {value == "2" ? <OutputScene3D fbxfilename="biniso20.fbx"/> : <null/>}
        </FbxContextProvider>
      </ThemeProvider>
    </div>
  );
}

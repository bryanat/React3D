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
import ExplainPage from './Scenes/ExplainPage';
import DemoSlides from './Scenes/DemoSlides';
import { FbxContextProvider } from './Scenes/FbxContext';

// import { FbxContext } from "./Scenes/FbxContext";
// const { count } = React.useContext(FbxContext)



export default function App() {


  const [value, setValue] = React.useState("1");

  const [resource, setResource] = React.useState("initialResource");
  const [isPending, startTransition] = useTransition();

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
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Item One" value="1" />
                <Tab label="Item Two" value="2" />
                <Tab label="Item Three" value="3" />
                <Tab label="Item Four" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              Item 1
              <InputTable />
              <SceneTensor />
            </TabPanel>
            <TabPanel value="2">
              Item 2 (peak into backend (videos, gifs, training performance, graphs, tensorboard))
              <SceneTensor />
            </TabPanel>
            <TabPanel value="3">
              <DemoSlides />
            </TabPanel>
            <TabPanel value="4">
              <ExplainPage />
            </TabPanel>
          </TabContext>
              {value == "1" ? <OutputScene3D fbxfilename="biniso20.fbx"/> : <null/>}
        </FbxContextProvider>
      </ThemeProvider>
    </div>
  );
}

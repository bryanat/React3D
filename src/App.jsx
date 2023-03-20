// import './Assets/App.css'
import OutputScene3D from './Scenes/OutputScene3D';
import SceneTensor from './Scenes/SceneTensor';
import TopNavBar from './Scenes/TopNavBar';
import TabsTest from './Scenes/TabsTest';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import InputTable from './Scenes/InputTable';
import InputScene3D from './Scenes/InputScene3D';

export default function App() {
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
        < CssBaseline />
        {/* <InputScene3D /> */}
        <TabsTest />
        <InputTable />
        <SceneTensor />
        <OutputScene3D />
      </ThemeProvider>
    </div>
  );
}

// import './Assets/App.css'
import OutputScene3D from './Scenes/OutputScene3D';
import SceneTensor from './Scenes/SceneTensor';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import InputTable from './Scenes/InputTable';

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#f50057',
      },
  }
  });

  return (
    <div className="App" style={{ width: '100%', height: '100vh' }}>
      <InputTable />
      <SceneTensor />
      <OutputScene3D />
    </div>
  );
}

import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { useEffect } from 'react';
import theme from './mui/theme';
import ASTIDashboard from './components/dashboard/ASTIDashboard';

function App() {

  useEffect(() => {
    document.title = 'Astiroids';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ASTIDashboard />
    </ThemeProvider>
  );
}

export default App;

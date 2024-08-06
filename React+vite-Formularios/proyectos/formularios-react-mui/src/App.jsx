import Nocontrolado from './components/NoControlado';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Nocontrolado />
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </ThemeProvider>
    </>
  );
};
export default App;
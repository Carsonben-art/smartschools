import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f5c242', // your yellow
    },
    background: {
      default: '#fffdf2', 
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: [
      '"Roboto"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'sans-serif',
    ].join(','),
  },
});

export default theme;

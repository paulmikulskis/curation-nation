import { createTheme } from '@mui/material/styles';
import { green, grey, blue, red, purple } from '@mui/material/colors';


export const theme = createTheme({
    palette: {
      background: {
        default: '#fafafa',
        paper: '#fff',
        dark: '#646464',
      },
      primary: {
        light: 'rgba(128,222,234,0.46)',
        main: green[500],
        dark: green[700],
      },
      secondary: {
        light: 'rgba(128,222,234,0.46)',
        main: blue[500],
        dark: blue[700],
      },
    },
    typography: {
      h5: {
        fontSize: "10px"
      }
    },
  
  });

export default theme;

import React from 'react';
import Home from './Home';
import { Button, ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    
  }
})

function App() {
  
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3f51b5',
      }
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home/>


    </ThemeProvider>
  );
}

export default App;

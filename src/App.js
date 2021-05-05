import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from './components/Header';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <Typography variant='h5'>Body</Typography>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;

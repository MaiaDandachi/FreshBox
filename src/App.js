import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

import Header from './components/Header/Header';
import HomeScreen from './components/HomeScreen/HomeScreen';

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
        <Route path='/' component={HomeScreen} />
      </ThemeProvider>
    </Router>
  );
}

export default App;

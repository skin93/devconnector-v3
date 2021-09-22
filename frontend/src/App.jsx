import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles/Global';
import Landing from './views/Landing/Landing';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path='/' component={Landing} />
          </Switch>
        </Router>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;

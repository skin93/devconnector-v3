import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles/Global';
import Register from './views/auth/Register';
import Login from './views/auth/Login';
import Landing from './views/Landing/Landing';
import Alert from './features/alert';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <Router>
          <Alert />
          <Switch>
            <Route path='/' component={Landing} exact />
            <Route path='/register' exact component={Register} />
            <Route path='/login' exact component={Login} />
          </Switch>
        </Router>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;

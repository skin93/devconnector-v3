import React from 'react';
import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/Global';

export const colors = {
  primaryColor: '#17a2b8',
  darkColor: '#343a40',
  lightColor: '#f4f4f4',
  dangerColor: '#dc3545',
  successColor: '#28a745',
};

export const paddings = {
  p: '0.5rem',
  p1: '1rem',
  p2: '2rem',
  p3: '3rem',
  py: '0.5rem 0',
  py1: '1rem 0',
  py2: '2rem 0',
  py3: '3rem 0',
};

export const margins = {
  m: '0.5rem',
  m1: '1rem',
  m2: '2rem',
  m3: '3rem',
  my: '0.5rem 0',
  my1: '1rem 0',
  my2: '2rem 0',
  my3: '3rem 0',
};

export const palette = {
  primary: {
    background: `${colors.primaryColor}`,
    color: '#fff',
  },
  light: {
    background: `${colors.lightColor}`,
    color: '#333',
  },
  dark: {
    background: `${colors.darkColor}`,
    color: '#fff',
  },
  danger: {
    background: `${colors.dangerColor}`,
    color: '#fff',
  },
  success: {
    background: `${colors.successColor}`,
    color: '#fff',
  },
  white: {
    background: '#fff',
    color: '#333',
    border: '#ccc solid 1px',
  },
};

export const texts = {
  xLarge: {
    fontSize: '4rem',
    lineHeight: 1.2,
    marginBottom: '1rem',
  },
  large: {
    fontSize: '3rem',
    lineHeight: 1.2,
    marginBottom: '1rem',
  },
  lead: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  textCenter: {
    textAlign: 'center',
  },
  textPrimary: {
    color: `${colors.primaryColor}`,
  },
  textDark: {
    color: `${colors.darkColor}`,
  },
};

export const theme = { colors, paddings, margins, palette, texts };

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <div className='App'>App component</div>;
      </Fragment>
    </ThemeProvider>
  );
}

export default App;

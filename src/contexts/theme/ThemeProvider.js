import React from "react";
// import { MuiThemeProvider  } from "styled-components";
import { MuiThemeProvider } from '@material-ui/core/styles';
import dark from '../../themes/dark';

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider  theme={dark}>{children}</MuiThemeProvider >
);

export default ThemeProvider;
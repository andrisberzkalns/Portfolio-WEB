import React from "react";

import AppRouter from './components/AppRouter';
import Navigation from './components/Navigation';
import ThemeProvider from './contexts/theme';

import { HeaderProvider } from "./contexts/header";
import { LocaleProvider } from "./contexts/localization";

import './styles.scss';

const App = () => {

  return (
    <ThemeProvider>
      <HeaderProvider>
        <LocaleProvider>
          <AppRouter>
            <Navigation/>
          </AppRouter>
        </LocaleProvider>
      </HeaderProvider>
    </ThemeProvider>
  );
}

export default App;
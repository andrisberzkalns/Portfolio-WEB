import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { LocaleProvider } from "./contexts/localization/LocaleProvider";
import AppRouter from './components/AppRouter';
import Navigation from './components/Navigation';
import Theme from './themes/Theme';
import './styles.scss';

const App = () => {

  return (
    <Theme>
      <LocaleProvider>
        <Router>
          <AppRouter>
            <Navigation/>
          </AppRouter>
        </Router>
      </LocaleProvider>
    </Theme>
  );
}

export default App;
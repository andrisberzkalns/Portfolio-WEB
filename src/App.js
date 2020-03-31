import React from "react";
import './styles.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Demos from './pages/Demos';
import DeviceOrientation from "./pages/Demos/DeviceOrientation";

export default function App() {
  return (
    <Router>
      <div className="grid-container">

        <Navigation/>

        <Switch>
            <Route path="/device-orientation">
                <DeviceOrientation />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/demos">
                <Demos />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}
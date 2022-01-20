import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import './index.css';

import Navbar from './Navbar';
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import About from "./About";
import Hire from "./pages/Hire/Hire";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/project">
            <Project />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/hire">
            <Hire />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

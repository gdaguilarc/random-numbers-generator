import React from "react";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./components/HomePage";
import MidSquare from "./components/MidSquare";
import AnimatedSwitch from "./components/AnimatedSwitch";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/midsquare" component={MidSquare} />
      </Switch>
      <Route exact path="/" render={redirectToHome} />
    </BrowserRouter>
  );
}

const redirectToHome = () => <Redirect to="/" />;

export default App;

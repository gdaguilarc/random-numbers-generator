import React from "react";

import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./components/HomePage";
import MidSquare from "./components/MidSquare";
import LinearCongruential from "./components/LinearCongruential";
import Mutiplicative from "./components/Multiplicative";
import CombinedLinealScreen from "./components/CombinedLinealCongruential";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/midsquare" component={MidSquare} />
        <Route exact path="/lincong" component={LinearCongruential} />
        <Route exact path="/multiplicative" component={Mutiplicative} />
        <Route exact path="/combinedlineal" component={CombinedLinealScreen} />
      </Switch>
      <Route exact path="/" render={redirectToHome} />
    </HashRouter>
  );
}

const redirectToHome = () => <Redirect to="/" />;

export default App;

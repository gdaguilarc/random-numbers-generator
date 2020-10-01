import React from "react";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Route exact path="/" render={redirectToHome} />
    </BrowserRouter>
  );
}

const redirectToHome = () => <Redirect to="/" />;

export default App;

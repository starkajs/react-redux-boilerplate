import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";

// import logo from "./logo.svg";

import Landing from "./containers/Landing";
import RouteOne from "./containers/RouteOne";
import RouteTwo from "./containers/RouteTwo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/one" component={RouteOne} />
          <Route exact path="/two" component={RouteTwo} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

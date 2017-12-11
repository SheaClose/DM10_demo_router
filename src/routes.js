import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route
      path="/random/:num"
      render={props => {
        return <div className="">{props.match.params.num}</div>;
      }}
    />
  </Switch>
);

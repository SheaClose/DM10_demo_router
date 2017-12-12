import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";

export default (
  <Switch className="">
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route
      path="/Random/:num"
      render={props => {
        console.log(props);
        return <div className="">Random: {props.match.params.name}</div>;
      }}
    />
  </Switch>
);

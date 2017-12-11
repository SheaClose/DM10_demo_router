import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "./routes";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: window.location.hash
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar bsClass="App-header">
          <div className="flex">
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/About">
              About
            </NavLink>
            <NavLink activeClassName="active" to="/Contact">
              Contact
            </NavLink>
            <NavLink
              activeClassName="active"
              to={`/random/${Math.floor(Math.random() * 50)}`}
            >
              Random
            </NavLink>
          </div>
        </Navbar>
        {routes}
      </div>
    );
  }
}

export default App;

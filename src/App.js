import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

import "./App.css";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: window.location.hash
    };
    this.setLocation = this.setLocation.bind(this);
  }
  setLocation(location) {
    window.location.hash = location;
    this.setState({ location: location });
  }
  renderComp() {
    switch (window.location.hash) {
      case "#/About":
        return <About />;
      case "#/Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar bsClass="App-header">
          <div className="flex">
            <a onClick={() => this.setLocation("/")}>Home</a>
            <a onClick={() => this.setLocation("/About")}>About</a>
            <a onClick={() => this.setLocation("/Contact")}>Contact</a>
          </div>
        </Navbar>
        {this.renderComp()}
      </div>
    );
  }
}

export default App;

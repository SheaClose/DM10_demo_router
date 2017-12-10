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
    // onClick={() => this.setLocation("/")}
    // onClick={() => this.setLocation("/About")}
    // onClick={() => this.setLocation("/Contact")}
    // window.location.hash = location;
    // this.setState({ location: location });
  }
  render() {
    return (
      <div className="App">
        <Navbar bsClass="App-header">
          <div className="flex">
            <a href="/#/">Home</a>
            <a href="/#/About">About</a>
            <a href="/#/Contact">Contact</a>
          </div>
        </Navbar>

        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;

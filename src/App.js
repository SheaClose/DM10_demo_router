import React, { Component } from "react";
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="flex">
            <a onClick={() => this.setLocation("/")}>Home</a>
            <a onClick={() => this.setLocation("/About")}>About</a>
            <a onClick={() => this.setLocation("/Contact")}>Contact</a>
          </div>
        </header>
        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;

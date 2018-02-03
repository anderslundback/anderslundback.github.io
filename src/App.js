import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

require("react-bootstrap/lib/NavbarHeader")

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="navbar-light">
            <button className="btn btn-primary">
              Home
            </button>
            <button className="btn btn-primary">
              About
            </button>
            <button className="btn btn-primary">
              Photos
            </button>
          </nav>
          <h1 className="App-title">Anders Lundbäck's personal website</h1>
        </header>
      </div>
    );
  }
}

export default App;

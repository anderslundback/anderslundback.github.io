import React, { Component } from 'react';
import './css/App.css';
import Main from './components/Main';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;

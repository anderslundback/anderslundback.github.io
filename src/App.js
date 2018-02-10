import React, { Component } from 'react';
// import macbookCoffee from './assets/images/macbook-and-coffee.jpg';
import { HashRouter, Route, Switch } from 'react-router-dom'
import './css/App.css';
// import Photos from './pages/Photos.js';

const renderNavbar = () => {
  return (
    <nav className="navbar">
      <a href="#home">
        <button className="btn btn-primary">
          Home
        </button>
      </a>
      <a href="#about">
        <button className="btn btn-primary">
          About
        </button>
      </a>
      <a href="#photos">      
        <button className="btn btn-primary">
          Photos
        </button>
      </a>
      <a href="#contact">      
        <button className="btn btn-primary">
          Contact
        </button>
      </a>
    </nav>
  );
}

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Photos = () => <h1>Photos</h1>;
const Contact = () => <h1>Contact</h1>;


class App extends Component {
  render() {
    return (
      // renderNavbar(),
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => Home()}/>          
          <Route path="/home" render={() => Home()}/>
          <Route path="/about" render={() => About()}/>          
          <Route path="/photos" render={() => Photos()}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;


/*
<div className="App">
  <div className="wrapper">
    <div className="container">
      <header className="header">
      <div className="headerImage"></div>
        {renderNavbar()}
      </header>
    </div>
    <div className="container">
      <section>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </section>
    </div>
  </div>
</div>
*/
import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

import leatherLaneSignImage from '../assets/leather-lane-sign.jpg';
import tikkaritoImage from '../assets/tikkarito.png';
import burgerImage from '../assets/singtong.jpg';
import logoImage from '../assets/farringdon.png';

import 'bulma/css/bulma.css';

export default class Hello extends Component {
  render() {
    return (
      <div className="wrapper">
        
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <img src={ logoImage } alt='farringdon logo' width="30" height="30" />
            <div className="navbar-item"><a>Home</a></div>
            <div className="navbar-item">
              <a>Leather Lane Market</a>
            </div>
            <div className="navbar-item">
              <a>Exmouth Market</a>
            </div>
          </div>
       </nav>

        <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Farringdon Foodie
            </h1>
            <h2 className="subtitle">
              Leatherlane Market
            </h2>
          </div>
        </div>
      </section>

        <section>
        <div className="container is-marginless is-paddingless">
          <div className="columns is-marginless is-paddingless">
            <div className="column is-paddingless full-image"><img src={ burgerImage } alt='Sington Burger' /></div>
            <div className="column is-paddingless"><img src={ leatherLaneSignImage } alt='Sign' /></div>
            </div>
        </div>
        <div className="column is-paddingless"><img src={ tikkaritoImage } alt='Tikkarito wraps' /></div>

        </section>
      </div>
    );
  }
}


render(<Hello />, document.getElementById('app'));
import React from 'react';
import Nav from './Nav';
import '../css/Header.css';

const Header = () => (
    <div>
        <header className="header">
            <div className="headerImage">
            </div>
            <div>
                <Nav />
            </div>
        </header>
    </div>
)

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav className="navbar-nav">
                <ul className='navbar'>
                    <li>
                        <NavLink activeClassName='active' to="/">
                            <button className="btn btn-primary">
                                Home
                        </button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to="/about">
                            <button className="btn btn-primary">
                                About
                        </button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to="contact">
                            <button className="btn btn-primary">
                                Contact
                        </button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to="/projects">
                            <button className="btn btn-primary">
                                Projects
                        </button>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;
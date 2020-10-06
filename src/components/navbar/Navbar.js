import React from 'react';
import './Navbar.css';
import DrawerToggleButton from './DrawerToggleButton';
import { Link } from 'react-router-dom';

const navbar = props => (
    <header className="navbar">
        <nav className="navbar_navigation">
            <div className="navbar_logo">
                <Link to="/">
                    <div className="logo_wrapper">
                        <div className="logo_icon"></div>
                        <div className="logo_desc">
                            <div className="logo_name">Duong Pham</div>
                            <div className="logo_title">SOFTWARE ENGINEER</div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="spacer" >
            </div>
            <div className="navbar_navigation_items">
                <ul>
                    <Link to="/">
                        <li>Start</li>
                    </Link>
                    <Link to="/project">
                        <li>Project <i class="arrow down"></i></li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
            <div className="navbar_toggle_button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
        </nav>
    </header>
);

export default navbar;
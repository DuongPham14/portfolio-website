import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side_drawer';
    if (props.show) {
        drawerClasses = 'side_drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Start</a></li>
                <li><a href="/project">Projects</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;
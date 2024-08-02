import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => (
    <nav className="navbar">
        <div className="navbar-container">
            <Link className="navbar-brand" to="/">Julia Weppler's Portfolio</Link>
            <ul className="navbar-menu">
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/coursework">Coursework</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </div>
    </nav>
);

export default Header;

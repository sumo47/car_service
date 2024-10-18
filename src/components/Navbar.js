import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
    return (
        <nav>
            {/* Header */}
            <header className="header">
                <Link to="/"><div className="logo">AutoServices</div></Link>
                <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
                    <Link to='/' onClick={toggleNav}>Services</Link>
                    <a href="/" onClick={toggleNav}>About</a>
                    <a href="/" onClick={toggleNav}>Contact</a>
                </nav>
                <button className="menu-btn" onClick={toggleNav}>
                    <span className="menu-icon">{isNavOpen ? '✖' : '☰'}</span>
                </button>
            </header>
        </nav>
    );
}

export default Navbar;

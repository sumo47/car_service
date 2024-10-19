import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';


function Navbar() {
    const Location = useLocation()
    // const Navigate = useNavigate()
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    const handleLogout = () => {
        localStorage.removeItem('Authorization')
        alert("Logged out successfull!")
        // Navigate('/Login')
    }
    return (
        <nav>
            {/* Header */}
            <header className="header">
                <Link to="/"><div className="logo">AutoServices</div></Link>
                <div className='NavItems'>

                    {
                        !localStorage.getItem("Authorization") ?

                            Location.pathname === '/Login' ?
                                <Link to='/Register'><button className='SignUpBtn'><span>SignUp</span></button></Link> :
                                <Link to='/Login'><button className='LoginBtn'><span>Login</span></button></Link>
                            :

                            <Link><button className='LogoutBtn' onClick={handleLogout}><span>Logout</span></button></Link>
                    }

                    <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
                        <Link to='/' onClick={toggleNav}>Services</Link>
                        <a href="/" onClick={toggleNav}>About</a>
                        <a href="/" onClick={toggleNav}>Contact</a>
                    </nav>
                    <button className="menu-btn" onClick={toggleNav}>
                        <span className="menu-icon">{isNavOpen ? '✖' : '☰'}</span>
                    </button>
                </div>
            </header>
        </nav>
    );
}

export default Navbar;

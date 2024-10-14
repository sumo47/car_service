import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pre-purchase-inspection">Pre-Purchase Inspection</Link></li>
                <li><Link to="/car-insurance">Car Insurance</Link></li>
                {/* Add more links as needed */}
            </ul>
        </nav>
    );
}

export default Navbar;

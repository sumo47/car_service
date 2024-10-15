import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import PrePurchaseInspection from './Pages/PrePurchaseInspection.js';
// import CarInsurance from './components/CarInsurance';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pre-purchase-inspection" element={<PrePurchaseInspection />} />
                {/* <Route path="/car-insurance" element={<CarInsurance />} /> */}
                {/* Add more routes as necessary */}
            </Routes>
        </Router>
    );
}

export default App;

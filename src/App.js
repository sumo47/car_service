import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import PrePurchaseInspection from './Pages/PrePurchaseInspection.js';
import CarInsurance from './Pages/CarInsurance.js';
import SellYourCar from './Pages/SellYourCar.js';
import Navbar from './components/Navbar';
import AppProvider from './context/AppProvider.js';
import CarValuation from './Pages/CarValuation.js';
import KeyDuplication from './Pages/KeyDuplication.js';
import MyGarage from './Pages/MyGarage.js';
import ConciergeService from './Pages/ConciergeService.js';
import ScrollToTop from './Helper/ScrollToTop.js';
import Login from './Pages/Login.js';
import Register from './Pages/Register.js';

function App() {


    return (
        <Router>
            <ScrollToTop />  {/* Call the function to scroll to top when route changes */}
            <AppProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/pre-purchase-inspection" element={<PrePurchaseInspection />} />
                    <Route path="/car-insurance" element={<CarInsurance />} />
                    <Route path="/sell-your-car" element={<SellYourCar />} />
                    <Route path="/car-valuation" element={<CarValuation />} />
                    <Route path="/key-Duplication" element={<KeyDuplication />} />
                    <Route path="/my-garage" element={<MyGarage />} />
                    <Route path="/concierge-service" element={<ConciergeService />} />
                    {/* Add more routes as necessary */}
                </Routes>
            </AppProvider>
        </Router>
    );
}

export default App;

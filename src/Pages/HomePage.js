import './HomePage.css'; // Import the CSS
import { motion } from 'framer-motion';
import { FaCar, FaMoneyCheckAlt, FaWrench, FaShieldAlt } from 'react-icons/fa';
import WhatsAppButton from '../components/WhatsAppButton';
import React, { useState } from 'react';



const HomePage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">AutoServices</div>
        <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
          <a href="#services" onClick={toggleNav}>Services</a>
          <a href="#about" onClick={toggleNav}>About</a>
          <a href="#contact" onClick={toggleNav}>Contact</a>
        </nav>
        <button className="menu-btn" onClick={toggleNav}>
          <span className="menu-icon">{isNavOpen ? '✖' : '☰'}</span>
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Your Trusted Automotive Partner</h1>
        <p>We offer the best services to take care of your vehicle.</p>
        <button className="hero-btn">Learn More</button>
      </section>

      {/* Services Section */}
      <div className="services-section" id="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <FaCar size={50} />
            <h3>Pre-purchase Inspection</h3>
            <p>Get your car inspected before you buy.</p>
          </motion.div>

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <FaShieldAlt size={50} />
            <h3>Car Insurance</h3>
            <p>Affordable car insurance plans.</p>
          </motion.div>

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <FaMoneyCheckAlt size={50} />
            <h3>Selling Your Car</h3>
            <p>Easy process to sell your car.</p>
          </motion.div>

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <FaWrench size={50} />
            <h3>Car Valuation</h3>
            <p>Know the worth of your car.</p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Auto Services. All rights reserved.</p>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;

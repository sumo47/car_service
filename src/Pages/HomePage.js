import './HomePage.css'; // Import the CSS
import { motion } from 'framer-motion';
import { FaClipboardCheck, FaCar, FaMoneyCheckAlt, FaWrench, FaShieldAlt, FaKey, FaConciergeBell } from 'react-icons/fa'; // Import the icons

import WhatsAppButton from '../components/WhatsAppButton';
import { Link } from 'react-router-dom'



const HomePage = () => {



  return (
    <div className="App">


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

          <Link to="/pre-purchase-inspection">
            <motion.div className="card" whileHover={{ scale: 1.05 }}>
              <FaClipboardCheck size={50} />
              <h3>Pre-purchase Inspection</h3>
              <p>Get your car inspected before you buy.</p>
            </motion.div>
          </Link>

          <Link to="/car-insurance">
            <motion.div className="card" whileHover={{ scale: 1.05 }}>
              <FaShieldAlt size={50} />
              <h3>Car Insurance</h3>
              <p>Affordable car insurance plans.</p>
            </motion.div>
          </Link>


          <Link to="/sell-your-car">

            <motion.div className="card" whileHover={{ scale: 1.05 }}>
              <FaMoneyCheckAlt size={50} />
              <h3>Selling Your Car</h3>
              <p>Easy process to sell your car.</p>
            </motion.div>
          </Link>


          <Link to="car-valuation">
            <motion.div className="card" whileHover={{ scale: 1.05 }}>
              <FaWrench size={50} />
              <h3>Car Valuation</h3>
              <p>Know the worth of your car.</p>
            </motion.div>
          </Link>

          {/* Key Duplication Service */}
          <Link to="/key-duplication">
            <motion.div className="card" whileHover={{ scale: 1.05 }}>
              <FaKey size={50} />
              <h3>Key Duplication</h3>
              <p>Get a spare key for your vehicle.</p>
            </motion.div>
          </Link>

          {/* My Garage Service */}
          <Link to="/my-garage">
            <motion.div className="card" whileHover={{ scale: 1.05 }}>
              <FaCar size={50} />
              <h3>My Garage</h3>
              <p>Manage and list your cars.</p>
            </motion.div>
          </Link>

          {/* Concierge Service */}
          <Link to="/concierge-service">
            <motion.div className="card" whileHover={{ scale: 1.05 }}>
              <FaConciergeBell size={50} />
              <h3>Concierge Service</h3>
              <p>Personalized assistance for your car needs.</p>
            </motion.div>
          </Link>

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

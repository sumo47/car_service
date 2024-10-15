import React, { useState } from 'react';
import './PrePurchaseInspection.css';
import PrePurchaseInspectionApi from '../api/leadApi';

const PrePurchaseInspection = () => {
  // Form state for inquiry form
  const [formData, setFormData] = useState({ name: '', email: '', serviceType: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await PrePurchaseInspectionApi(formData)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="service-page">

      {/* Service Section */}
      <section className="service-details">
        <div className="service-hero">
          <h1>Pre-purchase Inspection</h1>
          <p>Comprehensive vehicle inspection to help you make an informed decision before buying.</p>
        </div>
        <div className="service-content">
          <h2>Why Choose Our Pre-purchase Inspection?</h2>
          <p>
            Buying a car is a significant investment, and it's essential to know exactly what you're paying for.
            Our Pre-purchase Inspection service provides a detailed assessment of a vehicle’s condition, helping you
            avoid hidden problems or costly repairs down the road.
          </p>

          <h3>Our Inspection Covers:</h3>
          <ul>
            <li>Engine and transmission analysis</li>
            <li>Brake and suspension check</li>
            <li>Frame and exterior inspection</li>
            <li>Interior and comfort features</li>
            <li>Complete electrical system diagnostics</li>
            <li>Test drive evaluation</li>
          </ul>

          <h3>Get In Touch</h3>
          <p>Have any questions or want to schedule an inspection? Fill out the form below, and we’ll get back to you shortly!</p>

          {/* Inquiry Form */}
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="serviceType">Service Type</label>
            <input
              type="text"
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message/Inquiry</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="submit-btn">Submit Inquiry</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 AutoServices. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PrePurchaseInspection;

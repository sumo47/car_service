import React, { useState } from 'react';
import './ConciergeService.css';
import { GlobalProvider } from '../context/AppProvider';

const ConciergeService = () => {
  const { CreateConciergeServiceApi } = GlobalProvider(); // Access ConciergeService API from GlobalProvider

  // Form state for Concierge Service form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  // State to handle success and error messages
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await CreateConciergeServiceApi(formData); // Submit data using ConciergeServiceApi from GlobalProvider
      setSuccessMessage('Your request has been successfully submitted! Our team will contact you shortly.');
      setErrorMessage('');
      console.log('Form submitted:', formData);
    } catch (error) {
      setErrorMessage('Error submitting the form. Please try again later.');
      setSuccessMessage('');
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="concierge-container">
      <h1>Concierge Service</h1>
      <p>
        Our Concierge Service is designed to offer you personalized assistance tailored to your needs. Whether you require help with car maintenance, purchase advice, or any other automotive service, our dedicated team is here to support you.
      </p>

      <div className="service-details">
        <h2>What We Offer:</h2>
        <ul>
          <li>Personalized car buying assistance</li>
          <li>Expert maintenance advice</li>
          <li>Convenience in scheduling appointments</li>
          <li>24/7 customer support</li>
        </ul>
      </div>

      <h2>Contact Us for Personalized Assistance</h2>
      <form className="concierge-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <label htmlFor="message">How Can We Help You?</label>
        <textarea
          id="message"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your needs or questions"
          rows="6"
          required
        ></textarea>

        <button type="submit">Submit Request</button>
      </form>

      {/* Success and Error Messages */}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ConciergeService;

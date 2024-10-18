import React, { useState } from 'react';
import './KeyDuplication.css';
import { GlobalProvider } from '../context/AppProvider';

const KeyDuplication = () => {
  const { CreateKeyDuplicationApi } = GlobalProvider(); // Access KeyDuplication API from GlobalProvider

  // Form state for Key Duplication form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    keyDescription: ''
  });

  // State to handle success message visibility
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
      await CreateKeyDuplicationApi(formData); // Submit data using KeyDuplicationApi from GlobalProvider
      setSuccessMessage('Your key duplication request has been successfully submitted!');
      setErrorMessage('');
      console.log('Form submitted:', formData);
    } catch (error) {
      setErrorMessage('Error submitting the form. Please try again later.');
      setSuccessMessage('');
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="key-duplication-container">
      <h1>Key Duplication Services</h1>
      <p>
        Need an extra set of keys? Our fast and reliable key duplication services ensure you always have a spare. Whether it's for your car, home, or office, we can help.
      </p>

      <h2>How Our Key Duplication Service Works</h2>
      <ul className="duplication-details">
        <li>Provide the details of the key you need to duplicate.</li>
        <li>Submit the form below to request the duplication service.</li>
        <li>Our team will contact you with the next steps and pricing information.</li>
      </ul>

      <h2>Request Key Duplication</h2>
      <form className="duplication-form" onSubmit={handleSubmit}>
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

        <label htmlFor="carModel">Car Model:</label>
        <input
          type="text"
          id="carModel"
          name="carModel"
          value={formData.carModel}
          onChange={handleChange}
          placeholder="Enter car model (e.g., Camry)"
          required
        />

        <label htmlFor="keyDescription">Key Description:</label>
        <textarea
          id="keyDescription"
          name="keyDescription"
          value={formData.keyDescription}
          onChange={handleChange}
          placeholder="Provide any specific details about the key"
          rows="4"
          required
        ></textarea>

        <button type="submit">Request Duplication</button>
      </form>

      {/* Success and Error Messages */}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default KeyDuplication;

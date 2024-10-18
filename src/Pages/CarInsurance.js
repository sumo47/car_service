import React, { useState } from 'react';
import './CarInsurance.css';
import {GlobalProvider} from '../context/AppProvider'

const CarInsurance = () => {

    const {CreateCarInsuranceAPI} = GlobalProvider()
  // States for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    carModel: '',
    insuranceType: 'comprehensive',
  });

  // State for handling success/error messages
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call using Axios
    //   const response = await axios.post('/api/insurance', formData);
    await CreateCarInsuranceAPI(formData);
      setSuccessMessage('Quote request submitted successfully!');
      setErrorMessage('');
      console.log('Form submitted:', formData);
    } catch (error) {
      setErrorMessage('Error submitting the form. Please try again later.');
      setSuccessMessage('');
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="car-insurance-container">
      <h1>Car Insurance Options</h1>
      <p>
        Protect your car with the best insurance plans. We offer comprehensive and customized car insurance solutions for your peace of mind.
      </p>

      <h2>Choose Your Insurance Plan</h2>
      <ul className="insurance-list">
        <li>Comprehensive Insurance</li>
        <li>Third-Party Insurance</li>
        <li>Collision Coverage</li>
        <li>Personal Injury Protection</li>
        <li>Uninsured Motorist Protection</li>
      </ul>

      <h2>Get a Quote</h2>
      <p>Fill in the form below to get a personalized insurance quote:</p>

      <form className="insurance-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="car-model">Car Model:</label>
        <input
          type="text"
          id="car-model"
          name="carModel"
          value={formData.carModel}
          onChange={handleChange}
          placeholder="Enter your car model"
          required
        />

        <label htmlFor="insurance-type">Insurance Type:</label>
        <select
          id="insurance-type"
          name="insuranceType"
          value={formData.insuranceType}
          onChange={handleChange}
          required
        >
          <option value="comprehensive">Comprehensive</option>
          <option value="third-party">Third-Party</option>
          <option value="collision">Collision Coverage</option>
          <option value="personal-injury">Personal Injury Protection</option>
          <option value="uninsured-motorist">Uninsured Motorist Protection</option>
        </select>

        <button type="submit">Get Quote</button>

        {/* Success and Error Messages */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default CarInsurance;

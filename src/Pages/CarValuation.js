import React, { useState } from 'react';
import './CarValuation.css'; // Import CSS for styling
import { GlobalProvider } from '../context/AppProvider'; // Import global context

const CarValuation = () => {
  const { CreateCarValuationApi } = GlobalProvider(); // Use global provider for API

  // Form state for handling user input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carMake: '',
    carModel: '',
    manufactureDate: '',
    mileage: '',
    carCondition: 'excellent',
  });

  // State for handling success or error messages
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
      // Make an API call using Axios or the provided API
      await CreateCarValuationApi(formData);
      setSuccessMessage('Valuation request submitted successfully!');
      setErrorMessage('');
      console.log('Form submitted:', formData);
    } catch (error) {
      setErrorMessage('Error submitting the form. Please try again later.');
      setSuccessMessage('');
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="car-valuation-container">
      <h1>Car Valuation Services</h1>
      <p>
        Find out the true worth of your car with our trusted valuation services. Whether you're selling or simply curious, our experts will give you an accurate assessment of your vehicle's value.
      </p>

      <h2>How Our Valuation Works</h2>
      <ul className="valuation-details">
        <li>Enter your car's make, model, and year.</li>
        <li>Provide information about the car's condition and mileage.</li>
        <li>Submit the form to get an estimated market value of your car.</li>
        <li>Our experts will contact you with a detailed assessment.</li>
      </ul>

      <h2>Get Your Car Valued</h2>
      <form className="valuation-form" onSubmit={handleSubmit}>
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

        <label htmlFor="car-make">Car Make:</label>
        <input
          type="text"
          id="car-make"
          name="carMake"
          value={formData.carMake}
          onChange={handleChange}
          placeholder="Enter car make (e.g., Toyota)"
          required
        />

        <label htmlFor="car-model">Car Model:</label>
        <input
          type="text"
          id="car-model"
          name="carModel"
          value={formData.carModel}
          onChange={handleChange}
          placeholder="Enter car model (e.g., Camry)"
          required
        />

        <label for="date"> Enter a date (MM/DD/YYYY):</label>
        <input
          value={formData.manufactureDate}
          onChange={handleChange}
          type="text"
          name="manufactureDate"
          id="year" pattern="\d{2}/\d{2}/\d{4}"
          placeholder="Enter Date (e.g., 05/25/2000)"
          required />
        {/* <label htmlFor="date">Year of Manufacture:</label>
        <input
          type="date"
          id="year"
          name="manufactureDate"
          value={formData.manufactureDate}
          onChange={handleChange}
          placeholder="Enter year (e.g., 2015)"
          required
        /> */}

        <label htmlFor="mileage">Mileage (in km):</label>
        <input
          type="number"
          id="mileage"
          name="mileage"
          value={formData.mileage}
          onChange={handleChange}
          placeholder="Enter mileage (e.g., 50000)"
          required
        />

        <label htmlFor="condition">Car Condition:</label>
        <select
          id="condition"
          name="carCondition"
          value={formData.carCondition}
          onChange={handleChange}
          required
        >
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
          <option value="poor">Poor</option>
        </select>

        <button type="submit">Get Valuation</button>
      </form>

      {/* Success and Error Messages */}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default CarValuation;

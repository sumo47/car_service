import React, { useState } from 'react';
import './SellYourCar.css';
import { GlobalProvider } from '../context/AppProvider';

const SellYourCar = () => {
  const { CreateSellYourCarApi } = GlobalProvider(); // Access SellYourCar API from GlobalProvider

  // Form state for Sell Your Car form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carMake: '',
    carModel: '',
    manufactureDate: '',
    askingPrice: ''
  });



  // State to handle success message visibility
  const [successMessage, setSuccessMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await CreateSellYourCarApi(formData); // Submit data using SellYourCarApi from GlobalProvider
      setSuccessMessage('Your car details have been successfully submitted! We will contact you soon.');
      setErrorMessage('');

      console.log('Form submitted:', formData);
    } catch (error) {
      setErrorMessage('Error submitting the form. Please try again later.');
      setSuccessMessage(' ')
      console.error('Submission error:', error);

    }
  };

  return (
    <div className="sell-your-car-container">
      <h1>Sell Your Car</h1>
      <p>
        Selling your car is easy with us. Follow these steps to get started and submit the form below to provide details about your car.
      </p>

      <h2>How to Sell Your Car</h2>
      <ol className="selling-instructions">
        <li>Prepare your car for sale by cleaning and fixing any minor issues.</li>
        <li>Gather all necessary documents, including the title, registration, and service history.</li>
        <li>Get your car valued to set a competitive price.</li>
        <li>Fill out the form below with your car details and your contact information.</li>
        <li>Our team will contact you to complete the sale and finalize the transaction.</li>
      </ol>

      <h2>Submit Your Car Details</h2>
      <form className="sell-car-form" onSubmit={handleSubmit}>
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

        <label htmlFor="carMake">Car Make:</label>
        <input
          type="text"
          id="carMake"
          name="carMake"
          value={formData.carMake}
          onChange={handleChange}
          placeholder="Enter car make (e.g., Toyota)"
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
        <label for="date"> Enter a date (MM/DD/YYYY):</label>
        <input
          value={formData.manufactureDate}
          onChange={handleChange}
          type="text"
          name="manufactureDate"
          id="year" pattern="\d{2}/\d{2}/\d{4}"
          placeholder="Enter Date (e.g., 05/25/2000)"
          required />

        <label htmlFor="askingPrice">Expected Price ($):</label>
        <input
          type="number"
          id="askingPrice"
          name="askingPrice"
          value={formData.askingPrice}
          onChange={handleChange}
          placeholder="Enter your expected price"
          required
        />

        <button type="submit">Submit Your Car</button>
      </form>

      {/* Display success message if form is submitted */}
      {/* Success and Error Messages */}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default SellYourCar;

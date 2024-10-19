import React, { useState } from 'react';
import "../index.css";
import { GlobalProvider } from '../context/AppProvider';

const MyGarage = () => {
  const { CreateGarageEntryApi } = GlobalProvider(); // Access Garage Entry API from GlobalProvider

  // Form state for My Garage form
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    manufactureDate: '',
    mileage: '',
    carCondition: '',
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
    if (!localStorage.getItem("Authorization")) {
      return alert("Login to Add Car")
    }
    try {
      await CreateGarageEntryApi(formData); // Submit data using GarageEntryApi from GlobalProvider
      setSuccessMessage('Your car has been successfully listed in your garage!');
      setErrorMessage('');
      console.log('Form submitted:', formData);
    } catch (error) {
      setErrorMessage('Error submitting the form. Please try again later.');
      setSuccessMessage('');
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="my-garage-container">
      <h1>My Garage</h1>
      <p>List your cars privately and manage them all in one place.</p>

      <h2>List Your Car</h2>
      <form className="garage-form" onSubmit={handleSubmit}>
        <label htmlFor="car-make">Car Make:</label>
        <input
          type="text"
          id="car-make"
          name="make"
          value={formData.make}
          onChange={handleChange}
          placeholder="Enter car make (e.g., Ford)"
          required
        />

        <label htmlFor="car-model">Car Model:</label>
        <input
          type="text"
          id="car-model"
          name="model"
          value={formData.model}
          onChange={handleChange}
          placeholder="Enter car model (e.g., Mustang)"
          required
        />

        {/* <label htmlFor="manufactureYear">Year of Manufacture:</label>
        <input
          type="number"
          id="manufactureYear"
          name="manufactureYear"
          value={formData.manufactureYear}
          onChange={handleChange}
          placeholder="Enter year (e.g., 2020)"
          required
        /> */}

        <label for="date"> Enter Manufacture date (MM/DD/YYYY):</label>
        <input
          value={formData.manufactureDate}
          onChange={handleChange}
          type="text"
          name="manufactureDate"
          id="year" pattern="\d{2}/\d{2}/\d{4}"
          placeholder="Enter Manufacture Date (e.g., 05/25/2000)"
          required />

        <label htmlFor="mileage">Mileage (in km):</label>
        <input
          type="number"
          id="mileage"
          name="mileage"
          value={formData.mileage}
          onChange={handleChange}
          placeholder="Enter mileage (e.g., 30000)"
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
          <option value="">Select Condition</option>
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
          <option value="poor">Poor</option>
        </select>

        <label htmlFor="description">Car Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Provide a short description of the car"
          rows="4"
          required
        ></textarea>

        <button type="submit">List Your Car</button>
      </form>

      {/* Success and Error Messages */}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default MyGarage;

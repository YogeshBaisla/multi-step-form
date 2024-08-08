import React from 'react';
import Navigation from '../Navigation/Navigation';
const Step1 = ({ formData, handleChange, nextStep }) => {
  const { name, email, phone } = formData;

  const handleNext = e => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    } else {
      alert('Please ensure all fields are valid');
    }
  };

  const validateForm = () => {
    return (
      name.trim() !== '' &&
      /^\S+@\S+\.\S+$/.test(email) && // Simple email validation
      /^\d{10}$/.test(phone) // Validate phone number (10 digits)
    );
  };

  return (
    <form>
      <h2>Step 1: Personal Information</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={handleChange('name')}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={handleChange('email')}
        />
        {!/^\S+@\S+\.\S+$/.test(email) && email && (
          <small className="text-danger">Please enter a valid email address.</small>
        )}
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          className="form-control"
          value={phone}
          onChange={handleChange('phone')}
        />
        {!/^\d{10}$/.test(phone) && phone && (
          <small className="text-danger">Phone number must be 10 digits.</small>
        )}
      </div>
      <Navigation step={1} handleNext={handleNext} />
    </form>
  );
};

export default Step1;



import React from 'react';
import Navigation from './Navigation';

const Step1 = ({ formData, handleChange, nextStep }) => {
  const { name, email, phone } = formData;

  const handleNext = e => {
    e.preventDefault();
    if (name && email && phone) {
      nextStep();
    } else {
      alert('Please fill in all fields');
    }
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
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          className="form-control"
          value={phone}
          onChange={handleChange('phone')}
        />
      </div>
      <Navigation step={1} handleNext={handleNext} />
    </form>
  );
};

export default Step1;

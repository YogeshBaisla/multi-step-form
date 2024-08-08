import React from 'react';
import Navigation from '../Navigation/Navigation';

const Step2 = ({ formData, handleChange, nextStep, prevStep }) => {
  const { address1, address2, city, state, zip } = formData;

  const handleNext = e => {
    e.preventDefault();
    if (address1 && city && state && zip) {
      nextStep();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form>
      <h2>Step 2: Address Information</h2>
      <div className="form-group">
        <label>Address Line 1</label>
        <input
          type="text"
          className="form-control"
          value={address1}
          onChange={handleChange('address1')}
        />
      </div>
      <div className="form-group">
        <label>Address Line 2</label>
        <input
          type="text"
          className="form-control"
          value={address2}
          onChange={handleChange('address2')}
        />
      </div>
      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          className="form-control"
          value={city}
          onChange={handleChange('city')}
        />
      </div>
      <div className="form-group">
        <label>State</label>
        <input
          type="text"
          className="form-control"
          value={state}
          onChange={handleChange('state')}
        />
      </div>
      <div className="form-group">
        <label>Zip Code</label>
        <input
          type="text"
          className="form-control"
          value={zip}
          onChange={handleChange('zip')}
        />
      </div>
      <Navigation step={2} handleNext={handleNext} handlePrev={prevStep} />
    </form>
  );
};

export default Step2;

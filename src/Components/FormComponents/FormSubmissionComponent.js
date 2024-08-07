import React from 'react';
import Navigation from './Navigation';

const Step3 = ({ formData, prevStep }) => {
  const { name, email, phone, address1, address2, city, state, zip } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    // Simulate an API call
    setTimeout(() => {
      alert('Form submitted successfully');
      localStorage.removeItem('formData');
    }, 1000);
  };

  return (
    <form>
      <h2>Step 3: Confirmation</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>Name:</strong> {name}</li>
        <li className="list-group-item"><strong>Email:</strong> {email}</li>
        <li className="list-group-item"><strong>Phone:</strong> {phone}</li>
        <li className="list-group-item"><strong>Address Line 1:</strong> {address1}</li>
        <li className="list-group-item"><strong>Address Line 2:</strong> {address2}</li>
        <li className="list-group-item"><strong>City:</strong> {city}</li>
        <li className="list-group-item"><strong>State:</strong> {state}</li>
        <li className="list-group-item"><strong>Zip Code:</strong> {zip}</li>
      </ul>
      <Navigation step={3} handlePrev={prevStep} handleSubmit={handleSubmit} />
    </form>
  );
};

export default Step3;

import React, { useState, useEffect } from 'react';
import Step1 from './FormComponents/FormComponentPage1';
import Step2 from './FormComponents/FormComponentPage2';
import Step3 from './FormComponents/FormSubmissionComponent';
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData')) || {};
    setFormData({ ...formData, ...savedData });
  }, []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = input => e => {
    const value = e.target.value;
    const updatedFormData = { ...formData, [input]: value };
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
  };

  return (
    <>
      {step === 1 && (
        <Step1
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          prevStep={prevStep}
        />
      )}
    </>
  );
};

export default MultiStepForm;


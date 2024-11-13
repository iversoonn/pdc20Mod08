import React, { useState } from 'react';
import Tab from './Tab';
import TabContent from './TabContent';

const TabbedForm = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    studentId: '',
    program: '',
    yearLevel: '',
    gpa: '',
    hobbies: '',
    skills: '',
    notes: '',
  });

  // Error state to hold validation messages
  const [errors, setErrors] = useState({
    firstName: '',
    email: '',
    studentId: '',
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: '',  // Reset error message when the user starts typing
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Required fields validation
    if (!formData.firstName) {
      formErrors.firstName = 'First Name is required';
      isValid = false;
    }
    if (!formData.email) {
      formErrors.email = 'Email is required';
      isValid = false;
    }
    if (!formData.studentId) {
      formErrors.studentId = 'Student ID is required';
      isValid = false;
    }

    setErrors(formErrors); // Set the error messages
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert(`Submitted Data: ${JSON.stringify(formData, null, 2)}`);
    } else {
      alert('Please fill out all required fields');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#FBB917' }}>Registration Form</h1>
      <div style={{ display: 'flex', borderBottom: '2px solid #66B032', marginBottom: '20px' }}>
        <Tab name="Personal Information" isActive={activeTab === 'personal'} onClick={() => handleTabChange('personal')} />
        <Tab name="Contact Information" isActive={activeTab === 'contact'} onClick={() => handleTabChange('contact')} />
        <Tab name="Academic Information" isActive={activeTab === 'academic'} onClick={() => handleTabChange('academic')} />
        <Tab name="Additional Details" isActive={activeTab === 'additional'} onClick={() => handleTabChange('additional')} />
      </div>
      <form onSubmit={handleSubmit}>
        <TabContent activeTab={activeTab} formData={formData} onChange={handleChange} errors={errors} />
        <button
          type="submit"
          style={{
            backgroundColor: '#66B032',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '20px',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TabbedForm;

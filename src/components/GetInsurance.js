import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const GetInsurance = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverageType: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      to_email: 'romina.saaied@weinsuregroup.com',
      from_name: formData.name,
      from_email: formData.email,
      coverage_type: formData.coverageType,
      subject: `New Quote Request – ${formData.coverageType} Insurance`,
      message: `
Hello Romina,

You've received a new quote request from a potential client. Below are the details:

Name: ${formData.name}
Email: ${formData.email}
Selected Coverage Type: ${formData.coverageType}
The user is interested in getting a quote for ${formData.coverageType} insurance.

Automated message from weinsure-miami.com
      `
    }, 'YOUR_USER_ID')
    .then((result) => {
      console.log(result.text);
      alert('Your request has been sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('There was an error sending your request. Please try again.');
    });
  };

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">Get Insurance Quote</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="coverageType" className="block mb-2">Coverage Type</label>
          <select 
            id="coverageType" 
            name="coverageType" 
            value={formData.coverageType} 
            onChange={handleChange} 
            required 
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select coverage type</option>
            <option value="Home">Home</option>
            <option value="Auto">Auto</option>
            <option value="Life">Life</option>
            <option value="Business">Business</option>
            <option value="Flood">Flood</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default GetInsurance;
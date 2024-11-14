import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const coverageTypes = ['Home', 'Auto', 'Life', 'Business', 'Flood'];

export default function Home() {
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
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        to_email: 'romina.saaied@weinsuregroup.com',
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
      },
      'YOUR_USER_ID'
    ).then(
      (result) => {
        console.log(result.text);
        alert('Your quote request has been sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('There was an error sending your request. Please try again.');
      }
    );
  };

  return (
    <div className="bg-white">
      <div className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="object-cover w-full h-full"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://weinsuregroup.com/wp-content/uploads/2023/06/WeInsure-Hero-Video-v2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Data-driven for better value.<br/>People-led for better service.</h1>
            <p className="text-xl mb-8">Our insurance is personalized and personal. Great prices and great service in one.</p>
            <Link to="/get-insurance" className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
              Get a quote
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Every coverage type for every type of customer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {coverageTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <img src={`/placeholder.svg?height=100&width=100&text=${type}`} alt={type} className="mx-auto mb-4 w-24 h-24" />
                <h3 className="text-xl font-semibold mb-4">{type} Insurance</h3>
                <a href="#quote-form" className="bg-blue-500 text-white px-4 py-2 rounded inline-block hover:bg-blue-600 transition duration-300">
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="quote-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Request a Quote</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="coverageType" className="block mb-2 font-semibold">Coverage Type</label>
              <select
                id="coverageType"
                name="coverageType"
                value={formData.coverageType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select coverage type</option>
                {coverageTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Send Quote Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
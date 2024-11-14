import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const coverageTypes = ['Home', 'Car', 'Life', 'Business', 'Annuities'];

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
      <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-12">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Data-driven for better value.<br/>People-led for better service.</h1>
          <p className="text-xl mb-8">Our insurance is personalized and personal. Great prices and great service in one.</p>
          <Link to="/get-insurance" className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
            Get a quote
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-md aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="We Insure Miami Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Every coverage type for every type of customer</h2>
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-8">
            {coverageTypes.map((type, index) => (
              <a key={index} href={`#${type.toLowerCase()}`} className="text-center mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                  <img src={`https://via.placeholder.com/80?text=${type[0]}`} alt={type} className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <span className="text-sm font-semibold">{type}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {coverageTypes.map((type, index) => (
        <div id={type.toLowerCase()} key={index} className="py-24 bg-cover bg-center flex items-center" style={{backgroundImage: `url(https://source.unsplash.com/800x400/?${type.toLowerCase()},insurance)`}}>
          <div className="container mx-auto px-4">
            <div className="bg-white bg-opacity-90 p-12 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h3 className="text-4xl font-bold mb-4">{type} Insurance</h3>
              <p className="text-lg mb-6">Protect what matters most with our comprehensive {type.toLowerCase()} insurance coverage.</p>
              <a href="#quote-form" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img src={`https://source.unsplash.com/400x200/?insurance,tip${item}`} alt={`Insurance Tip ${item}`} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Insurance Tip {item}</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Link to="/news-resources" className="text-blue-500 font-semibold hover:underline">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="quote-form" className="py-16 bg-gray-100">
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
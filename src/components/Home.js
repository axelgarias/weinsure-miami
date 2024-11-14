import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="bg-gray-800 text-white py-20">
        <div className="container mx-auto flex">
          <div className="w-1/2 pr-4">
            <h1 className="text-4xl font-bold mb-4">Data-driven for better value.<br/>People-led for better service.</h1>
            <p className="mb-6">Our insurance is personalized and personal. Great prices and great service in one.</p>
            <div className="space-x-4">
              <Link to="/contact" className="bg-white text-blue-900 px-6 py-2 rounded">Find your local agent</Link>
              <Link to="/get-insurance" className="bg-blue-500 text-white px-6 py-2 rounded">Get a quote</Link>
            </div>
          </div>
          <div className="w-1/2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Every coverage type for every type of customer</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {['Home', 'Auto', 'Life', 'Business', 'Flood'].map((type, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
              <img src={`/placeholder.svg?height=100&width=100`} alt={type} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">{type} Insurance</h3>
              <Link to="/get-insurance" className="bg-blue-500 text-white px-4 py-2 rounded inline-block">Get a Quote</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
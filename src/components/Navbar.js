import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">We Insure Miami</Link>
        <div className="space-x-4">
          <Link to="/get-insurance" className="hover:text-blue-300">Get Insurance</Link>
          <Link to="/news-resources" className="hover:text-blue-300">News and Resources</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact Us</Link>
          <Link to="/payment" className="hover:text-blue-300">Make a Payment</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
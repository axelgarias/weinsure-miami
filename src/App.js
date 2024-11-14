import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GetInsurance from './components/GetInsurance';
import NewsResources from './components/NewsResources';
import Contact from './components/Contact';
import Payment from './components/Payment';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-insurance" element={<GetInsurance />} />
          <Route path="/news-resources" element={<NewsResources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
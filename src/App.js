import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GetInsurance from './components/GetInsurance';
import NewsResources from './components/NewsResources';
import Contact from './components/Contact';
import Payment from './components/Payment';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/weinsure-miami">
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-insurance" element={<GetInsurance />} />
            <Route path="/news-resources" element={<NewsResources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
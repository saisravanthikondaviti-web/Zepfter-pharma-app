import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import './App.css';

function Home() {
  return <div style={{ padding: '2rem', textAlign: 'center' }}><h1>Home Page</h1></div>;
}

function Services() {
  return <div style={{ padding: '2rem', textAlign: 'center' }}><h1>Services</h1></div>;
}

function Solutions() {
  return <div style={{ padding: '2rem', textAlign: 'center' }}><h1>Solutions</h1></div>;
}

function Courses() {
  return <div style={{ padding: '2rem', textAlign: 'center' }}><h1>Courses</h1></div>;
}


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Existing pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />

          {/* ✅ ADD THESE */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;

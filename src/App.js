import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Contact from './pages/Contact';
import WhyZepfter from "./components/WhyZepfter";
import './App.css';

function Services() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Services</h1>
    </div>
  );
}

function Solutions() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Solutions</h1>
    </div>
  );
}

function Courses() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Courses</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth & Dashboard */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Why Zepfter Page */}
          <Route path="/whyzepfter" element={<WhyZepfter />} />

          {/* Solution Detail Pages */}
          <Route path="/solutions/lims" element={<h1>LIMS</h1>} />
          <Route path="/solutions/data-analytics" element={<h1>Data Analytics</h1>} />
          <Route path="/solutions/cds" element={<h1>CDS</h1>} />
          <Route path="/solutions/scm" element={<h1>SCM</h1>} />
          <Route path="/solutions/sap-attp" element={<h1>SAP ATTP</h1>} />
          <Route path="/solutions/sap-btp" element={<h1>SAP BTP</h1>} />
          <Route path="/solutions/csv" element={<h1>CSV</h1>} />
          <Route path="/solutions/rpa" element={<h1>RPA</h1>} />
          <Route path="/solutions/ai" element={<h1>AI</h1>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
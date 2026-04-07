import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Contact from './pages/Contact';
import WhyZepfter from "./components/WhyZepfter";
import LIMS from "./pages/solutions/LIMS";
import DataAnalytics from "./pages/solutions/DataAnalytics";
import CDS from "./pages/solutions/CDS";
import SupplyChain from "./pages/solutions/SupplyChain";
import SAPATTP from "./pages/solutions/SAPATTP";
import SAPBTP from "./pages/solutions/SAPBTP";
import CSV from "./pages/solutions/CSV";
import RPA from "./pages/solutions/RPA";
import AI from "./pages/solutions/AI";
import ServicesPage from "./pages/ServicesPage";
import Courses from "./pages/Courses";
import ModulePage from "./pages/ModulePage";

import './App.css';



function Solutions() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Solutions</h1>
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
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth & Dashboard */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/module" element={<ModulePage />} />

          {/* Why Zepfter Page */}
          <Route path="/whyzepfter" element={<WhyZepfter />} />

          {/* Solution Detail Pages */}
          <Route path="/solutions/lims" element={<LIMS />} />
          <Route path="/solutions/data-analytics" element={<DataAnalytics />} />
          <Route path="/solutions/cds" element={<CDS />} />
          <Route path="/solutions/scm" element={<SupplyChain />} />
          <Route path="/solutions/sap-attp" element={<SAPATTP />} />
          <Route path="/solutions/sap-btp" element={<SAPBTP />} />
          <Route path="/solutions/csv" element={<CSV />} />
          <Route path="/solutions/rpa" element={<RPA />} />
          <Route path="/solutions/ai" element={<AI />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import StartBusiness from './pages/StartBusiness';
import Registration from './pages/Registration';
import ManageBusiness from './pages/ManageBusiness';
import Document from './pages/Document';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Appointment from './pages/Appointment';
import ContactUs from './pages/ContactUs';

import ServiceDetail from './pages/ServiceDetail';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicyPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-brand-bg text-slate-200">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start-business" element={<StartBusiness />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/manage-business" element={<ManageBusiness />} />
            <Route path="/document" element={<Document />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact-us" element={<ContactUs />} />
            
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />

      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/Home';
import About from './pages/About';
import Speakers from './pages/Speaker';
import Contact from './pages/Contact';
import PaperPolicy from './pages/PaperPolicy';
import ConferenceCommittee from './pages/ConferenceCommittee'; 
import ConferenceThemes from './pages/ConferenceThemes';  
import Registration from './pages/Registration';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/committee' element={<ConferenceCommittee />} />
        <Route path='/themes' element={<ConferenceThemes />} />
        <Route path='/paper-policy' element={<PaperPolicy />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
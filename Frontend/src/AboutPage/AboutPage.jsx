import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer.jsx';
import About from '../components/About.jsx';

const AboutPage = () => {
  return (
    <div>
      <div className="min-h-screen dark:bg-slate-900">
            <Navbar />
            <About />
            <Footer />
        </div>
    </div>
  )
}

export default AboutPage
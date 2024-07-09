import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

const Contacts = () => {
    return (
        <div className="min-h-screen dark:bg-slate-900">
            <Navbar />
            <Contact />
            <Footer />
        </div>
    )
}

export default Contacts
import React from 'react';
import Home from './home/Home';
import { Navigate, Route,Routes } from "react-router-dom";
import Courses from './courses/Courses.jsx';
import Signup from './components/Signup';
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import AboutPage from './AboutPage/AboutPage.jsx';
import Contacts from './Contacts/Contacts.jsx';
function App() {
  const [authUser, setAuthUser]= useAuth();
  console.log(authUser);
  return (
    <>
      {/* <Home/>
      <Course/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
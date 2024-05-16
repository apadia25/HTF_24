import React from 'react';
import './App.css';
import LandingPage from './landingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Patient1 from './Patient1';
import Navbar from './Navbar';
import Dsign from './Dsign';
import Psign from './Psign';
import Login from './login';
import Patient3 from './Patient3';
import Patient2 from './Patient2';
import TodaysApp from './TodaysApp';
import Dlogin from './Dlogin';
import Doclist from './DocList';
import DoctorSign from './Dsignup';

function App() {
  return (
    // <>
    // <Navbar />
    // <LandingPage />
    // <Patient1 />
    // <Doclist />
    // <Dsign />
    // <Psign />
    <>
      <Navbar />
      <Router>
        <Routes>

        <Route path="/Patient2" element={<Patient2 />} />

  
          <Route path="/Patient3" element={<Patient3 />} /> 

          <Route path="/landingPage" element={<LandingPage />} />

          <Route path="/Patient1" element={<Patient1 />} />

          <Route path="/Psign" element={<Psign />} />

          <Route path="/Login" element={<Login />} /> 

              
          <Route path="/" element={<LandingPage />} />


          <Route path="Dlogin" element={<Dlogin />} /> 

          <Route path="/Dsign" element={<Dsign />} />
          <Route path="/Dsignup" element={<DoctorSign/>}/>
          <Route path="/TodaysApp" element={<TodaysApp />} />  
          <Route path="/Doclist" element={<Doclist />} />  



        </Routes>
      </Router></>

  );
}

export default App;



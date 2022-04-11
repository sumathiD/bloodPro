import React from 'react';
import './App.css';
import LoginDemo from './pages/LoginDemo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import FindBloodGroup from './pages/FindBloodGroup';
import RegisterDonor from './pages/RegisterDonor';
import DonorsList from './pages/DonorsList';
import DonorDetails from './pages/DonorDetails';
import Help from './pages/Help';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginDemo />} />
        <Route path="/" element={<LoginDemo />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} >
          <Route path="" element={<FindBloodGroup />} />
          <Route path="findBloodGroup" element={<FindBloodGroup />} />
          <Route path="registerDonor" element={<RegisterDonor />} />
          <Route path="donorsList" element={<DonorsList />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>




      {/* <BrowserRouter>
    <Routes>
      <Route path="/" element= { <LoginDemo /> } />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/singup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
     
      <Route path="/registerDonor" element={<RegisterDonor />} />
    
      <Route path="/donorDetails" element={<DonorDetails />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  </BrowserRouter> */}
    </div>
  );
}

export default App;

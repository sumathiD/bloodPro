import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { BrowserRouter,  Routes,  Route, Outlet, useNavigate, NavLink} from "react-router-dom";
import FindBloodGroup from './FindBloodGroup';
import RegisterDonor from './RegisterDonor';
import LoginDemo from './LoginDemo';
import DonorsList from './DonorsList';

function Dashboard() {

  let navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('user');
    if(!token) {
      navigate('/login');
    }
  }, [] )

  return (
    <div>
      
        <Navbar />       
        <Outlet />
  
    </div>
  )
}

export default Dashboard;
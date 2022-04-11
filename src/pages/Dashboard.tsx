import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter,  Routes,  Route, Outlet } from "react-router-dom";
import FindBloodGroup from './FindBloodGroup';
import RegisterDonor from './RegisterDonor';
import {NavLink} from 'react-router-dom'
import LoginDemo from './LoginDemo';
import DonorsList from './DonorsList';

function Dashboard() {
  return (
    <div>
        <Navbar />
       
        <Outlet />
  
    </div>
  )
}

export default Dashboard;
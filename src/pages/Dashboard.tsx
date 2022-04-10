import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter,  Routes,  Route, Outlet } from "react-router-dom";
import FindBloodGroup from './FindBloodGroup';
import RegisterDonar from './RegisterDonar';
import {NavLink} from 'react-router-dom'
import LoginDemo from './LoginDemo';
import DonorsList from './DonorsList';

function Dashboard() {
  return (
    <div>
        <Navbar />
        <p></p>
        <Outlet />
  
    </div>
  )
}

export default Dashboard;
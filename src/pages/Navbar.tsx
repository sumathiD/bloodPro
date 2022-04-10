import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DonorsList from './DonorsList';
import FindBloodGroup from './FindBloodGroup';

function Navbar() {
  return (
    <div>
        {/* <nav>
            <NavLink style={{margin: '10px'}} to="findBloodGroup">Find Blood Group</NavLink> 
            <NavLink to="donorsList">Donors List</NavLink>
      </nav> */}
        <ul className='navList'>
            <li><Link to="findBloodGroup">Find a Blood Group</Link></li>
            <li><Link to="registerDonar">Register Blood Group</Link></li>
            <li><Link to="donorsList">Latest Donor list</Link></li>
            <li><Link to="help">Help</Link></li>
            <li><Link to="/">Login</Link></li>
        </ul>

    </div>
  )
}

export default Navbar
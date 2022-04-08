import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DonorsList from './DonorsList';
import FindBloodGroup from './FindBloodGroup';

function Navbar() {
  return (
    <div>
        <h2>Navbar</h2>
        <nav>
            <NavLink to="/findBlookGroup"><FindBloodGroup />--Find--</NavLink><br/><br/>
            <NavLink to="/donorsList"><DonorsList />--Donor--</NavLink>
      </nav>
        {/* <ul style={{ listStyle: 'none'}}>
            <li><Link to="/findBloodGroup">Find a Blood Group</Link></li>
            <li><Link to="/registerDonar">Register Blood Group</Link></li>
            <li><Link to="#">Latest Donor list</Link></li>
            <li><Link to="#">Help</Link></li>
        </ul> */}

    </div>
  )
}

export default Navbar
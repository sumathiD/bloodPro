import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';


export default function Navbar() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', alignItems:'center', typography: 'body1' }}>
      {/* <nav>
            <NavLink style={{margin: '10px'}} to="findBloodGroup">Find Blood Group</NavLink> 
            <NavLink to="donorsList">Donors List</NavLink>
      </nav> */}
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab component={Link} label="Find Blood Group" to="findBloodGroup" />
            <Tab component={Link} label="Register Donor" to="registerDonor" />
            <Tab component={Link} label="Donor List" to="donorsList" />
            <Tab component={Link} label="Help" to="help" />
            <Tab component={Link} label="Logout" to="/" />
          </TabList>
        </Box>
       
      </TabContext>
    </Box>
  );
}

/*
function Navbar() {
  return (
    <div style={{textAlign: 'center', padding:'0 0 20px'}}>
        { <nav>
            <NavLink style={{margin: '10px'}} to="findBloodGroup">Find Blood Group</NavLink> 
            <NavLink to="donorsList">Donors List</NavLink>
      </nav> }


      
          <Link to="findBloodGroup">Find a Blood Group</Link>
            <Link to="registerDonor">Register Blood Group</Link>
            <Link to="donorsList">Latest Donor list</Link>
            <Link to="help">Help</Link>
            <Link to="/">Login</Link>

    </div>
  )
}

export default Navbar */
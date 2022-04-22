import * as React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList } from '@mui/lab';
import { Button } from '@material-ui/core';


export default function Navbar() {
  const [value, setValue] = React.useState('1');
  let navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(newValue);

    if(Number(newValue) === 4){
        localStorage.removeItem('user');
        navigate('/login');
    }
  };

  return (
    <div className='navBar'>
    <Box sx={{ width: '100%', alignItems:'center', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab component={Link} label="Find Blood Group" to="findBloodGroup" />
            <Tab component={Link} label="Register Donor" to="registerDonor" />
            <Tab component={Link} label="Donor List" to="donorsList" />
            <Tab component={Link} label="Help" to="help" />
            <Tab label="Logout" />
          </TabList>
        </Box>
       
      </TabContext>
    </Box>
    </div>
  );
}

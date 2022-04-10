import React from 'react';
import { useNavigate,Link} from 'react-router-dom';
import {Avatar, Grid,Paper, TextField} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function LoginDemo() {
  let navigate= useNavigate();
  const paperStyle={padding:20,height:'60vh',width:280,margin:'20px auto'};
  const buttonStyle={margin:'8px 0'}
  const avatarStyle={backgroundColor:"#305281"}
  return (
    <Grid>
       {/* <input type="text"></input><br/><br/>
       <button onClick={() => navigate("../dashboard") }>submit</button> */}
<Paper elevation={10} style={paperStyle}>
  <Grid className='center'>
  <Avatar className='align' style={avatarStyle} ><LockOutlinedIcon/></Avatar>
      <h2>Log in</h2>
  </Grid>
  <TextField label="Email" placeholder='Email' fullWidth required/>
  <TextField label="Password" placeholder='Password' type="password" fullWidth required/>
  <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />
      <Button variant="contained" color="primary" fullWidth style={buttonStyle} onClick={() => navigate("/dashboard") }>
       LOGIN
      </Button>
      {/* <Typography>
  <Link href="#">
    forgot password ?
  </Link>
</Typography> */}
<Typography>
  Do you have an account ?
  <Link to ="/signup">
   Sign up 
  </Link>
</Typography>
</Paper>
      </Grid>
    
  )
}

export default LoginDemo
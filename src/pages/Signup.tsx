import React, { useState } from 'react';
import { useNavigate,} from 'react-router-dom';
import {Avatar, Grid,Paper, TextField,Link} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as Yup from 'yup';
import {Formik,Field,Form,ErrorMessage} from 'formik'
function Signup() {
  const [values,setValues]=useState({
    Email:'',
    Password:"",
    confirmPassword:""
  })

  const handleChange =(e:any) =>{
  setValues({
    ...values,
    [e.target.name]:e.target.value, })
  // console.log(e.target.name,e.target.value);
  }

  let navigate= useNavigate();
  const paperStyle={padding:20,height:'65vh',width:280,margin:'20px auto'};
  const buttonStyle={margin:'8px 0'}
  const avatarStyle={backgroundColor:"#305281"}
  const initialValues={
    Email:"",
    Password:"",
    confirmPassword:""
  }
  const validationSchema=Yup.object().shape({
    Email:Yup.string().email("Enter valid email").required("Enter valid email"),
    Password:Yup.string().min(8,"Enter valid email").required("Enter valid password")
  })
  const onSubmit=(values:any,props:any)=>(
    console.log(values)
  )
  return (
    <Grid>
       {/* <input type="text"></input><br/><br/>
       <button onClick={() => navigate("../dashboard") }>submit</button> */}
<Paper elevation={10} style={paperStyle}>
  <Grid className='center'>
  <Avatar className='align' style={avatarStyle} ><LockOutlinedIcon/></Avatar>
      <h2>Sign up</h2>
  </Grid>
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {(props) =>(
      <Form>
<Field as={TextField} label="Email" placeholder='Email' name="Email" helperText={<ErrorMessage name="Email"/>} value={values.Email} onChange={handleChange}fullWidth required/>

  <Field as={TextField} label="Password" placeholder='Password' type="password" onChange={handleChange} name="Password"  helperText={<ErrorMessage name="Password"/>} value={values.Password} fullWidth required/>

  <Field as={TextField} label="confirm Password" placeholder='confirm Password' onChange={handleChange} name="confirmPassword" value={values.confirmPassword} fullWidth required/>
      {/* <Button variant="contained" color="secondary" fullWidth style={buttonStyle} onClick={() => navigate('/') }>
       SIGN UP </Button> */}
      <Button variant="contained" color="secondary" fullWidth style={buttonStyle}>
       SIGN UP </Button> 
       
      {/* <Typography>
  <Link href="#">z
    forgot password ?
  </Link>
</Typography> */}
{/* <Typography>
  Do you have an account ?
  <Link href="#">
   Sign up 
  </Link>
</Typography> */}
      </Form>
    )}
  </Formik>
  
</Paper>
      </Grid>
    
  )
}

export default Signup
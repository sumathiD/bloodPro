import React, { useState } from 'react';
import { useNavigate,} from 'react-router-dom';
import {Avatar, Grid,Paper, TextField,Link} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as yup from 'yup';
import {Formik,Field,Form, useFormik} from 'formik';

  const paperStyle={padding:20,height:'65vh',width:280,margin:'20px auto'};
  const buttonStyle={margin:'8px 0'}
  const avatarStyle={backgroundColor:"#305281"}
  const validationSchema = yup.object({
    Email: yup
    .string()
    .email("Enter valid email")
    .required("email required"),
    Password:yup.string().min(8,"Enter valid email").required(" password required "),
    confirmPassword:yup.string().oneOf([yup.ref('Password')],"password not matched").required("required")
  })
function Signup() {
  // const [values,setValues]=useState({
  //   Email:'',
  //   Password:"",
  //   confirmPassword:""
  // })

  // const handleChange =(e:any) =>{
  // setValues({
  //   ...values,
  //   [e.target.name]:e.target.value, })
  // // console.log(e.target.name,e.target.value);
  // }
  let navigate= useNavigate();
  
  const formik = useFormik({
    initialValues:{
      Email:'',
      Password:"",
      confirmPassword:""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
    },
  })
 
 
  // const onSubmit=(values:any,props:any)=>(
  //   console.log(values)
  // )
  return (
    <Grid>
       {/* <input type="text"></input><br/><br/>
       <button onClick={() => navigate("../dashboard") }>submit</button> */}
<Paper elevation={10} style={paperStyle}>
  <Grid className='center'>
  <Avatar className='align' style={avatarStyle} ><LockOutlinedIcon/></Avatar>
      <h2>Sign up</h2>
  </Grid>
<form  onSubmit={formik.handleSubmit}>
<TextField 
fullWidth
label="Email" 
placeholder='Email' 
id="Email"
name="Email" 
helperText={ formik.touched.Email && formik.errors.Email} 
value={formik.values.Email}   
error={formik.touched.Email && Boolean(formik.errors.Email)} 
onChange={formik.handleChange}  />

  <TextField label="Password" placeholder='Password' type="password" onChange={formik.handleChange} name="Password"  error={formik.touched.Password && Boolean(formik.errors.Password)} helperText={ formik.touched.Password && formik.errors.Password} value={formik.values.Password} fullWidth/>

  <TextField label="confirm Password" placeholder='confirm Password' type="password" onChange={formik.handleChange} name="confirmPassword"  helperText={ formik.touched.confirmPassword && formik.errors.confirmPassword} value={formik.values.confirmPassword} error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)} fullWidth/>
      {/* <Button variant="contained" color="secondary" fullWidth style={buttonStyle} onClick={() => navigate('/') }>
       SIGN UP </Button> */}
      <Button variant="contained" color="secondary" fullWidth style={buttonStyle} type='submit'>
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
</form>
</Paper>
      </Grid>

  )
}

export default Signup
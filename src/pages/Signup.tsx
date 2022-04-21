import React, { useState } from 'react';
import { useNavigate, } from 'react-router-dom';
import { Avatar, Grid, Paper, TextField, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as yup from 'yup';
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import axios from 'axios';
import AuthService from '../services/AuthService';


const paperStyle = { padding: 20, height: '65vh', width: 280, margin: '20px auto' };
const buttonStyle = { margin: '8px 0' }
const avatarStyle = { backgroundColor: "#305281" }

const validationSchema = yup.object({
  Email: yup
    .string()
    // .email("Enter valid email")
    .required("email required"),
  Password: yup.string().min(3, "Enter valid email").required(" password required "),
  confirmPassword: yup.string().oneOf([yup.ref('Password')], "password not matched").required("required")
})


function Signup() {

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      Email: '',
      Password: "",
      confirmPassword: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
     
      const username: any = values.Email;
      const password: any = values.Password;

      AuthService.signup(username, password).then(
        (response) => {
          console.log("Sign up successfully", response);
          navigate("/login");        
        },
        (error) => {
          console.log(error);
        }
      );
    }
  })

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid className='center'>
          <Avatar className='align' style={avatarStyle} ><LockOutlinedIcon /></Avatar>
          <h2>Sign up</h2>
        </Grid>
        <form onSubmit={formik.handleSubmit} autoComplete='off'>
          <TextField autoComplete='off'
            fullWidth
            label="Email"
            placeholder='Email'
            id="Email"
            name="Email"
            helperText={formik.touched.Email && formik.errors.Email}
            value={formik.values.Email}
            error={formik.touched.Email && Boolean(formik.errors.Email)}
            onChange={formik.handleChange} />
          <TextField label="Password" placeholder='Password' type="password" onChange={formik.handleChange} name="Password" error={formik.touched.Password && Boolean(formik.errors.Password)} helperText={formik.touched.Password && formik.errors.Password} value={formik.values.Password} fullWidth />
          <TextField label="confirm Password" placeholder='confirm Password' type="password" onChange={formik.handleChange} name="confirmPassword" helperText={formik.touched.confirmPassword && formik.errors.confirmPassword} value={formik.values.confirmPassword} error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)} fullWidth />

          <Button variant="contained" color="secondary" fullWidth style={buttonStyle} type='submit'>
            SIGN UP </Button>

        </form>
      </Paper>
    </Grid>
  )
}
export default Signup
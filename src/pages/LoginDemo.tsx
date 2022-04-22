import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Avatar, Grid, Paper, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as yup from 'yup';
import { useFormik } from 'formik';
import AuthServices from '../services/AuthService';


const validationSchema = yup.object({
  Email: yup
    .string()
    // .email("Enter valid email")
    .required("email required"),
  Password: yup
    .string()
    .required(" password required ")

})

function LoginDemo() {

  let navigate = useNavigate();
  const paperStyle = { padding: 20, height: '60vh', width: 280, margin: '20px auto' };
  const buttonStyle = { margin: '8px 0' }
  const avatarStyle = { backgroundColor: "#305281" }

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

      AuthServices.login(username, password).then(
        () => {
          navigate('/dashboard');
        },
        (error) => {
          // console.log(error);
          alert(error);
        }
      )
    }
  })

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid className='center'>
          <Avatar className='align' style={avatarStyle} ><LockOutlinedIcon /></Avatar>
          <h2>Log in</h2>
        </Grid>
        <form onSubmit={formik.handleSubmit}>

          <TextField
            fullWidth
            label="Email"
            placeholder='Email'
            id="Email"
            name="Email"
            helperText={formik.touched.Email && formik.errors.Email}
            value={formik.values.Email}
            error={formik.touched.Email && Boolean(formik.errors.Email)}
            onChange={formik.handleChange} />
          <TextField
            label="Password"
            placeholder='Password'
            type="password"
            onChange={formik.handleChange}
            name="Password"
            error={formik.touched.Password && Boolean(formik.errors.Password)}
            helperText={formik.touched.Password && formik.errors.Password}
            value={formik.values.Password}
            fullWidth />

          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            style={buttonStyle}
            type='submit'>
            Login
          </Button>
        </form>
        <Typography>
          Do you have an account ?
          <Link to="/signup">
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>

  )
}

export default LoginDemo
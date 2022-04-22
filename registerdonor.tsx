import { SaveOutlined, SearchOutlined } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';

import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { authHeader } from '../services/authHeader';

const validationSchema = yup.object({
  donorname: yup
    .string()
    .required('Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  contact: yup
    .number()
    .required('Conact number is required'),
    bloodtype: yup
    .string()
    .required('Blood type is required'),
    placename: yup
    .string()
    .required('Place name is required'),
});

function RegisterDonor() {

  console.log('auth header :', authHeader());
  const headers:any = authHeader();

  const formik = useFormik({
    initialValues: {
      donorname:'',
      email: '',
      contact: '',
      bloodtype: '',
      placename: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      
      const token = localStorage.getItem('user');
     
      fetch(`http://localhost:3000/donors`, {
        method: 'POST',      
        headers,
        body: JSON.stringify({
          "name": values.donorname,
          "mailId":values.email,
          "contact": values.contact,
          "bloodGroup": values.bloodtype,
          "place": values.placename
        }),     
      })
        .then((res01: any) => {
            console.log('res01 data :', res01.data);
            navigate('../donorsList');
        },
        (error:any) => {
          console.log(error);
          alert('CHECK the ERROR!');
        }
        )

    },
  });

  let navigate = useNavigate();
  const paperStyle = { padding: 20, height: '60vh', width: 280, margin: '20px auto' };
  const buttonStyle = { margin: '25px 0' }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>

        <h2>Register Donor</h2>

        <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="donorname"
          name="donorname"
          label="DonorName"
          value={formik.values.donorname}
          onChange={formik.handleChange}
          error={formik.touched.donorname && Boolean(formik.errors.donorname)}
          helperText={formik.touched.donorname && formik.errors.donorname}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="contact"
          name="contact"
          label="Contact"
          type="number"
          value={formik.values.contact}
          onChange={formik.handleChange}
          error={formik.touched.contact && Boolean(formik.errors.contact)}
          helperText={formik.touched.contact && formik.errors.contact}
        />
        <TextField
          fullWidth
          id="bloodtype"
          name="bloodtype"
          label="Blood Type"
          value={formik.values.bloodtype}
          onChange={formik.handleChange}
          error={formik.touched.bloodtype && Boolean(formik.errors.bloodtype)}
          helperText={formik.touched.bloodtype && formik.errors.bloodtype}
        />
        <TextField
          fullWidth
          id="placename"
          name="placename"
          label="Place"
          value={formik.values.placename}
          onChange={formik.handleChange}
          error={formik.touched.placename && Boolean(formik.errors.placename)}
          helperText={formik.touched.placename && formik.errors.placename}
        />
        <Button startIcon={<SaveOutlined />} color="primary" variant="contained"  style={buttonStyle} fullWidth type="submit">
          Submit
        </Button>
      </form>    
        
      </Paper>
    </Grid>
  )
}

export default RegisterDonor
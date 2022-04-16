import { SaveOutlined, SearchOutlined } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';

import { useFormik } from 'formik';
import * as yup from 'yup';


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
      // axios.post('')
      // alert(JSON.stringify(values, null, 2));
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


/*

function RegisterDonor() {
  const options = [
    { key: 'Email', value: 'emailmoc' },
    { key: 'Telephone', value: 'telephonemoc' }
  ]
  const initialValues = {
    // donorname: string,
    // email: string,
    // phoneno: number
    donorname:'John',
    email: 'foobar@example.com',
    phoneno: '12345',
  }

  const validationSchema = yup.object({
    donorname: yup
      .string()
      .required('Email is required'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    phoneno: yup
      .number()
      .required('Phone number is required')
  });

  const onSubmit = (values: any) => {
    console.log('Form data', values);
  }


  const formik = useFormik({
    initialValues: {
      initialValues
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
            id="donorname"
            name="donorname"
            label="DonorName"
            type="text"
            value={formik.values.donorname}
            onChange={formik.handleChange}
            error={formik.touched.donorname && Boolean(formik.errors.donorname)}
            helperText={formik.touched.donorname && formik.errors.donorname}
          />

          <TextField
            id="donorContact"
            name="donorContact"
            label="Contact Number"
            type="number"
            fullWidth required />

          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>


        <TextField
          id="donorName"
          name="donorName"
          label="Name"
          type="text"
          fullWidth required />
        <TextField
          id="donorEmail"
          name="donorEmail"
          label="Email"
          type="text"
          fullWidth required />

        <TextField
          id="donorContact"
          name="donorContact"
          label="Contact Number"
          type="number"
          fullWidth required />

        <TextField
          id="donorBldType"
          name="donorBldType"
          label="Blood Type"
          type="text"
          fullWidth required />

        <TextField
          id="donorPlace"
          name="donorPlace"
          label="Place"
          type="text"
          fullWidth required />

        <Button
          startIcon={<SaveOutlined />}
          size="large"
          onClick={() => navigate("../donorsList")}
          variant="contained"
          color="primary"
          fullWidth style={buttonStyle}
        >
          Register
        </Button>
      </Paper>
    </Grid>

  )
}

*/

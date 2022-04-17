import { useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@material-ui/icons';
import { Grid, Paper, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { useState } from 'react';

const validationSchema = yup.object({
  donorBldType: yup
    .string()
    .required('Name is required'),
  donorPlace: yup
    .string()
    .required('Place name is required'),
});

function FindBloodGroup() {

  let navigate = useNavigate();
  const paperStyle = { padding: 20, width: 280, margin: '50px auto' };
  const buttonStyle = { margin: '25px 0' }

  const [findval, setFindval] = useState([] as any[]);

  const formik = useFormik({
    initialValues: {
      donorBldType:'',
      donorPlace: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      
      const token = localStorage.getItem('user');      
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }

     fetch(`http://localhost:3000/donors/search?bloodgroup=${values.donorBldType}&place=${values.donorPlace}`, {
        method: 'GET',      
        headers    
      })
        .then((bgData: any) => {
          setFindval(bgData.data);
            console.log('Find BG data :', JSON.stringify(bgData.data));
            // navigate('../donorsList');
        },
        (error:any) => {
          console.log(error);
          alert('CHECK the ERROR!');
        }
        )

    },
  });
  
  
  return (
<div>



    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <h2>Find Blood Group</h2>
        <form onSubmit={formik.handleSubmit}>
        <TextField
          id="donorBldType"
          name="donorBldType"
          label="Blood Type"
          type="text"
          helperText={formik.touched.donorBldType && formik.errors.donorBldType}
          value={formik.values.donorBldType}
          error={formik.touched.donorBldType && Boolean(formik.errors.donorBldType)}
          onChange={formik.handleChange}
          fullWidth required />

        <TextField
          id="donorPlace"
          name="donorPlace"
          label="Place"
          type="text"
          helperText={formik.touched.donorPlace && formik.errors.donorPlace}
          value={formik.values.donorPlace}
          error={formik.touched.donorPlace && Boolean(formik.errors.donorPlace)}
          onChange={formik.handleChange}
          fullWidth required />

        <Button
          startIcon={<SearchOutlined />}
          size="large"
          variant="contained"
          color="primary"
          fullWidth style={buttonStyle}
          type="submit"
        >
          Find Results
        </Button>
        </form>
      </Paper>
    </Grid>
<h3>Search Results: </h3>

    {findval && findval.map((bdglist) => (
  <ul key="bdglist.id">
    <li>{bdglist.name}</li>
  </ul>
))}

    </div>
  )
}

export default FindBloodGroup
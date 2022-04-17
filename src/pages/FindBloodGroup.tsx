import { useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@material-ui/icons';
import { ButtonBase, Grid, Paper, TextField } from '@material-ui/core'
import { Avatar } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Button from '@material-ui/core/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { useState } from 'react';
import Typography from '@mui/material/Typography';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

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

  const [results, setResults] = useState([] as any[]);

  const formik = useFormik({
    initialValues: {
      donorBldType:'',
      donorPlace: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      
      const token = localStorage.getItem('user');  
      console.log('Toekn id',token);    
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
         axios.get(`http://localhost:3000/donors/search?bloodgroup=${values.donorBldType}&place=${values.donorPlace}`, 
         { headers })
        .then((response: any) => {
          setResults(response.data);
            console.log('Find results :', JSON.stringify(response.data));
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
<h3 style={{textAlign:'center'}}>Search Results: </h3>

    {results && results.map((result) => (
  // <ul key="result.id">
  //   <li>{result.name}</li>
  // </ul>

  <div className='donorList'>
<Grid container spacing={1} key="userdata.id">
<Paper elevation={10} style={paperStyle}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={1}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <span className='donorLabel'>Name</span> : {result.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <span className='donorLabel'>Email </span> : {result.mailId}
                  </Typography>
                  <Typography variant="body2">
                    <span className='donorLabel'>Contact </span> : {result.contact}
                  </Typography>
                  <Typography variant="body2">
                    <span className='donorLabel'> Blood Group </span> : {result.bloodGroup}
                  </Typography>
                  <Typography variant="body2">
                    <span className='donorLabel'>Place </span> : {result.place}
                  </Typography>
                  <Typography variant="body2">
                    <span className='donorLabel'>  </span> 
                  </Typography>
                </Grid>

              </Grid>
            </Grid>
            </Paper>
          </Grid>
          </div>
))}
    </div>
  )
}

export default FindBloodGroup
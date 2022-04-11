import { SaveOutlined, SearchOutlined } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';


function RegisterDonor() {

  let navigate = useNavigate();
  const paperStyle = { padding: 20, height: '60vh', width: 280, margin: '20px auto' };
  const buttonStyle = { margin: '25px 0' }


  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>

        <h2>Register Donor</h2>

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

export default RegisterDonor
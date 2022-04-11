import { useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@material-ui/icons';
import { Grid, Paper, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';


function FindBloodGroup() {
  let navigate = useNavigate();
  const paperStyle = { padding: 20, width: 280, margin: '50px auto' };
  const buttonStyle = { margin: '25px 0' }
  return (
     
      <Grid>
      <Paper elevation={10} style={paperStyle}>
      <h2>Find Blood Group</h2>
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
          startIcon={<SearchOutlined />}
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

export default FindBloodGroup
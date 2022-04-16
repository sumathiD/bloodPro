import React from 'react';
import { useState, useEffect } from "react";
import { Avatar } from '@material-ui/core'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import axios from 'axios';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function DonorsList() {

  const [dataval, setDataval] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {

    const token = localStorage.getItem('user');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    axios.get(`http://localhost:3000/donors`,
      { headers }
    )
      .then((res) => {
        setDataval(res.data)
        console.log('donors', res.data);
      })
  }, [] )


  return (
    <>
     <button onClick={() => setMsg('Temp')}>temp</button>

      <h2 style={{ textAlign: 'center' }}>Donors List</h2>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >

        {/* "name": values.donorname,
        "mailId":values.email,
        "contact": values.contact,
        "bloodGroup": values.bloodtype,
        "place": values.placename */}

        {/* <ul>
  <li>{name}</li>
  <li>{mailId}</li>
  <li>{contact}</li>
  <li>{bloodGroup}</li>
  <li>{place}</li>
</ul> */}

        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 158, height: 128 }}>
              <Avatar className='align01' ></Avatar>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Name : Sumathi
                </Typography>
                <Typography variant="body2" gutterBottom>
                  B. Type : O positive
                </Typography>
                <Typography variant="body2">
                  Place : Chennai
                </Typography>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 158, height: 128 }}>
              <Avatar className='align01' ></Avatar>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Name : Sumathi
                </Typography>
                <Typography variant="body2" gutterBottom>
                  B. Type : O positive
                </Typography>
                <Typography variant="body2">
                  Place : Chennai
                </Typography>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 158, height: 128 }}>
              <Avatar className='align01' ></Avatar>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Name : Sumathi
                </Typography>
                <Typography variant="body2" gutterBottom>
                  B. Type : O positive
                </Typography>
                <Typography variant="body2">
                  Place : Chennai
                </Typography>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}


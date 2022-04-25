import React from 'react';
import { useState, useEffect } from "react";
import { Avatar } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getDonors } from '../redux/features/donorSlice';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function DonorsList() {

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDonors()); // dispatch action
  }, [dispatch]);


  let donorState = useSelector((store: any) => {
    return store["donors"];
  });
  
  let { loading, errorMessage, donors } = donorState;

  return (
    <div className='donorList'>
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
        {
          loading && <h2>...Loading</h2>
        }
        {
          !loading && errorMessage && <h3>{errorMessage}</h3>
        }
        {
          !loading && donors.length > 0 &&


          donors.map((donorData: any) => (


            <Grid container spacing={1} key="donorData.id">
              <Grid item>
                <ButtonBase sx={{ width: 85, height: 150 }}>
                  <Avatar className='align01' ></Avatar>
                </ButtonBase></Grid>

              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={1}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" component="div">
                      <span className='donorLabel'>Name</span> : {donorData.name}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <span className='donorLabel'>Email </span> : {donorData.mailId}
                    </Typography>
                    <Typography variant="body2">
                      <span className='donorLabel'>Contact </span> : {donorData.contact}
                    </Typography>
                    <Typography variant="body2">
                      <span className='donorLabel'> Blood Group </span> : {donorData.bloodGroup}
                    </Typography>
                    <Typography variant="body2">
                      <span className='donorLabel'>Place </span> : {donorData.place}
                    </Typography>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          ))

        }
      </Paper>
    </div>
  );
}


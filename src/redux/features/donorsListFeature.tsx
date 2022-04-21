import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { authHeader } from '../../services/authHeader';


const initialState = {
    loading: false,
    donors: [],
    errorMessage: ''
}

const API_URL01 = `http://localhost:3000`;
const headers:any = authHeader();

export const getDonors = createAsyncThunk('donors/getDonors', async () => {
    
    let response = await axios.get(`${API_URL01}/donors`, 
    {headers} );
    return response.data;

});

const donorListSlice = createSlice({
    name: 'donors',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(getDonors.pending, (state, action) => {
            state.loading = true;
        }).addCase(getDonors.fulfilled, (state, action) => {
            state.loading= false;
            state.donors = action.payload;
            console.log('state donors',state.donors);
            // state.donors.push(action.payload);
        }).addCase(getDonors.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = 'Something Wrong!!';
        })
    }
})

export default donorListSlice.reducer;



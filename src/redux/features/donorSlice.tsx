import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios';
import { authHeader } from '../../services/authHeader';
import axios from '../axiosInstance';


const initialState = {
    loading: false,
    donors: [],
    errorMessage: ''
}

// const API_URL01 = `http://localhost:3000`;
const headers: any = authHeader();


export const getDonors = createAsyncThunk('donors/getDonors', async () => {
    let response = await axios.get(`/donors`,
        { headers });
    return response.data;
});


export const regDonors = createAsyncThunk(
    "donors/regDonors",
    async (values: any): Promise<any> => {
        let response = await axios.post(`/donors`, {
            name: values.donorname,
            mailId: values.email,
            contact: values.contact,
            bloodGroup: values.bloodtype,
            place: values.placename,
        }, { headers });

    });

export const findDonors = createAsyncThunk(
    'donors/findDonors',
    async (values: any): Promise<any> => {
        let response = await axios.get(`/donors/search?bloodgroup=${values.donorBldType}&place=${values.donorPlace}`,
            { headers });
        console.log('find results', response.data);
        return response.data;
    });

const donorListSlice = createSlice({
    name: 'donors',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDonors.pending, (state, action) => {
            state.loading = true;
        }).addCase(getDonors.fulfilled, (state, action) => {
            state.loading = false;
            state.donors = action.payload;
            console.log('state donors', state.donors);
        }).addCase(getDonors.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = 'Donors not registered yet!!';
        });

        builder.addCase(regDonors.pending, (state, action) => {
            state.loading = true;
        }).addCase(regDonors.fulfilled, (state, action) => {
            state.loading = false;
            state.donors = action.payload;
            console.log('state donors', state.donors);
        }).addCase(regDonors.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = 'Went wrong please try again!!';
        });

        builder.addCase(findDonors.pending, (state, action) => {
            state.loading = true;
        }).addCase(findDonors.fulfilled, (state, action) => {
            state.loading = false;
            state.donors = action.payload;
            console.log('state donors', state.donors);
        }).addCase(findDonors.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = 'No donors in the Blood Group';
        });
    }
})

export default donorListSlice.reducer;



import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { authHeader } from '../../services/authHeader';

export const Temp = () => {
    <>test</>
}

// const initialState = {
//     loading: false,
//     donor: [],
//     // dname: '', 
//     // mail: '', 
//     // contact: '', 
//     // bdgp: '', 
//     // place: '',
//     errorMessage: ''
// }

// const API_URL01 = `http://localhost:3000`;
// const headers:any = authHeader();

//     export const regDonor = createAsyncThunk('donors/regDonor', async () => {
//     let response = await axios.post(`${API_URL01}/donors`, {
//     headers,
//     // body: JSON.stringify({
//     //     dname, 
//     //     mail, 
//     //     contact, 
//     //     bdgp, 
//     //     place
//     //   }),  
//     }   
//      );
//     return response.data;

// });

// const regDonorListSlice = createSlice({
//     name: 'donor',
//     initialState,
//     reducers: { },
//     extraReducers: (builder) => {
//         builder.addCase(regDonor.pending, (state, action) => {
//             state.loading = true;
//         }).addCase(regDonor.fulfilled, (state, action) => {
//             state.loading= false;
//             state.donor = action.payload;
//             console.log('state donors',state.donor);
//             // state.donors.push(action.payload);
//         }).addCase(regDonor.rejected, (state, action) => {
//             state.loading = false;
//             state.errorMessage = 'Something Wrong!!';
//         })
//     }
// })

// export default regDonorListSlice.reducer;



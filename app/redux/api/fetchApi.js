import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('api/get_all', async () => {
    const response = await axios.get('http://localhost:3000/api/all_users/');
    return response.data;
  });


  const usersSlice = createSlice({
    name: 'users',
    initialState: {
      users: [],
      status: 'idle', // idle | loading | succeeded | failed
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export default usersSlice.reducer;
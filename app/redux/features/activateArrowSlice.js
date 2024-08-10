// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const activateArrowSlice = createSlice({
  name: 'arrow',
  initialState: {
    value: false,
  },
  reducers: {
    activate: state => {
      state.value =true;
    },
    deactivate: state => {
      state.value =false;
    },
    
  },
});

export const { activate, deactivate } = activateArrowSlice.actions;

export default activateArrowSlice.reducer;

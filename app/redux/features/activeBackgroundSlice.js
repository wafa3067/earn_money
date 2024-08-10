// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const activateBackgroundSlice = createSlice({
  name: 'color',
  initialState: {
    value: true,
  },
  reducers: {
    activateColor: (state) => {
      state.value =true;
    },
    deactivateColor: (state) => {
      state.value =false;
    },
    
  },
});

export const { activateColor, deactivateColor } = activateBackgroundSlice.actions;

export default activateBackgroundSlice.reducer;

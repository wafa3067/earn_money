// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const openNameSlice = createSlice({
  name: 'names',

  initialState: [],
  reducers: {
    add: (state,action) => {
      state.push(action.payload);
    },
    remove: (state,action) => {
        return state.filter(name => name !== action.payload);
    },
    clear:()=>{return []}
    
  },
});

export const { add, remove,clear } = openNameSlice.actions;

export default openNameSlice.reducer;

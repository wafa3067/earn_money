import {createSlice} from '@reduxjs/toolkit'

export const packageSlice=createSlice({
    name:"package",
    initialState:{
      value: true,
    },
    reducers:{
        packageActivate:(state,action)=>{
            state.value=action.payload
        }
    }

});
export const {packageActivate} =packageSlice.actions;
export default packageSlice.reducer;
import {createSlice} from '@reduxjs/toolkit'

export const uperSlice=createSlice({
    name:"uper",
    initialState:[true,false,false,false],
    reducers:{
        activeData:(state,action)=>{
            const {index,value}=action.payload;
            state[index]=value;
        }
    }

});
export const {activeData} =uperSlice.actions;
export default uperSlice.reducer;
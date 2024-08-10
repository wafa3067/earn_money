import { Password } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Email: "",
  Password: "",
};
const loginSlice = createSlice({
  initialState,
  name: "login",
  reducers: {
    loginField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});
export const { loginField } = loginSlice.actions;
export default loginSlice.reducer;

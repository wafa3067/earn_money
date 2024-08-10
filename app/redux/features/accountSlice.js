import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  userName: "",
  number: "",
  email: "",
  address: "",
  countryState: "",
  zipCode: "",
  country: "",
  activeBranche: "",
  //agency
  agencyContractContract: "",
  agencyFeesContract: "",
  //backoffice
  backOfficeContractContract: "",
  backOfficeFeesContract: "",
  //projectLeader
  projectLeaderContractContract: "",
  projectLeaderFeesContract: "",
  //subAgencyManager
  subAgencyManagerContractContract: "",
  subAgencyManagerFeesContract: "",
  //salesPartner
  salesPartnerContractContract: "",
  salesPartnerFeesContract: "",
  //agency manager fixed
  agencyFeesFixed: "",
  backOfficeFeesFixed: "",
  projectLeaderFeesFixed: "",
  subAgencyManagerFeesFixed: "",
  salesPartnerFeesFixed: "",
  // contract
  contractDuration: "",
  numberofContracts: "",

  // Add more fields as needed
};

export const accountSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setName: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setUserName: (state, action) => {
      const { userName, value } = action.payload;
      state[userName] = value;
    },
    setEmail: (state, action) => {
      const { email, value } = action.payload;
      state[email] = value;
    },
    setNumber: (state, action) => {
      const { number, value } = action.payload;
      state[number] = value;
    },
    setAddress: (state, action) => {
      const { address, value } = action.payload;
      state[address] = value;
    },
    setState: (state, action) => {
      const { countryState, value } = action.payload;
      state[countryState] = value;
    },
    setZipCode: (state, action) => {
      const { zipCode, value } = action.payload;
      state[zipCode] = value;
    },
    setCountry: (state, action) => {
      const { country, value } = action.payload;
      state[country] = value;
    },
    setAtiveBranche: (state, action) => {
      const { activeBranche, value } = action.payload;
      state[activeBranche] = value;
    },

    // Add more reducers as needed
  },
});

export const {
  setField,
  setUserName,
  setAddress,
  setAtiveBranche,
  setCountry,
  setEmail,
  setName,
  setNumber,
  setState,
  setZipCode,
} = accountSlice.actions;
export default accountSlice.reducer;

// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import activateArrowSlice from "../features/activateArrowSlice";
import openNameSlice from "../features/openNamesSlice";
import activateBackgroundSlice from "../features/activeBackgroundSlice";
import uperSlice from "../features/uperSlice";
import accountSlice from "../features/accountSlice";
import loginSlice from "../features/login";
import usersSlice from "../api/fetchApi";

export const store = configureStore({
  reducer: {
    arrow: activateArrowSlice,
    names: openNameSlice,
    color: activateBackgroundSlice,
    uper: uperSlice,
    create: accountSlice,
    users: usersSlice,
    login: loginSlice,
  },
});

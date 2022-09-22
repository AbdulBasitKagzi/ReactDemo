import { configureStore } from "@reduxjs/toolkit";
import  signupSlice  from "./authReducer";


const store = configureStore({
  reducer: {
    user: signupSlice,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authReducer";

const store = configureStore({
  reducer: {
    user: authSlice,
  },
});

export default store;

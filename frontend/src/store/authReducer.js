import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = process.env.REACT_APP_URL;
// initial state that can be updated by reducer action and can be sent to backend
let authState = {
  user: "",
  token: "",
  role: "",
  isLoading: "",
  error: "",
};

// for user sign up
export const userSignup = createAsyncThunk(
  "authSlice/userSignup",
  async (body, thunkAPI) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/transportgoodsservice/signup",
        body,
        {
          header: {
            "Content-Type":
              "application/x-www-form-urlencoded; charset=UTF-8;application/json",
          },
        }
      );
      const token = res.data.token;

      // setting up token and user
      localStorage.setItem("token", JSON.stringify(token).replaceAll('"', ""));
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("role", res.data.user.role);
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.error);
    }
  }
);

// for user signin/login
export const userSignin = createAsyncThunk(
  "authSlice/userSignin",
  async (body, thunkAPI) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/transportgoodsservice/login",
        body,
        {
          header: {
            "Content-Type":
              "application/x-www-form-urlencoded; charset=UTF-8;application/json",
          },
        }
      );

      const token = res.data.token;

      // setting up token and user

      localStorage.setItem("token", JSON.stringify(token).replaceAll('"', ""));
      localStorage.setItem("user", JSON.stringify(res.data.registeredUser));
      localStorage.setItem("role", res.data.registeredUser.role);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

const authSlice = createSlice({
  name: "user",
  initialState: authState,
  reducers: {
    logOut(state) {
      state.token = "";
      state.user = "";
      state.role = "";
    },
    clearMessage(state) {
      state.error = "";
    },
  },
  extraReducers: {
    // signup
    [userSignup.fulfilled]: (state, action) => {
      state.user = action.payload.data.user;
      state.role = action.payload.data.user.role;

      state.isLoading = false;

      state.token = action.payload.data.token;

      state.error = "";
    },
    [userSignup.pending]: (state) => {
      state.isLoading = true;
    },
    [userSignup.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    // signin
    [userSignin.fulfilled]: (state, action) => {
      state.user = action.payload.data.registeredUser;
      state.role = action.payload.data.registeredUser.role;
      state.isLoading = false;
      state.token = action.payload.data.token;
      state.error = "";
    },
    [userSignin.pending]: (state) => {
      state.isLoading = true;
    },
    [userSignin.rejected]: (state, action) => {
      state.isLoading = false;

      state.error = action.payload;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;

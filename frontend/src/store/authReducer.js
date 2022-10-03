import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state that can be updated by reducer action and can be sent to backend
let authState = {
  user: "",
  token: "",
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
      console.log(res.data.user);

      // console.log("---------res-------", res.data.token);
      // setting up token and user
      localStorage.setItem("token", JSON.stringify(token).replaceAll('"', ""));
      localStorage.setItem("user", JSON.stringify(res.data.user));
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
      console.log("login res", res);
      const token = res.data.token;
      // setting up token and user
      localStorage.setItem("token", JSON.stringify(token).replaceAll('"', ""));
      localStorage.setItem("user", JSON.stringify(res.data.registeredUser));
      return res;
    } catch (error) {
      console.log(error.response.data.error);
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

const authSlice = createSlice({
  name: "user",
  initialState: authState,
  reducers: {
    logOut(state, action) {
      state.token = "";
      state.user = "";
    },
  },
  extraReducers: {
    // signup
    [userSignup.fulfilled]: (state, action) => {
      state.user = action.payload.data.user;
      state.isLoading = false;
      console.log(action.payload.data.token);
      state.token = action.payload.data.token;
      state.error = "";
    },
    [userSignup.pending]: (state, action) => {
      state.isLoading = true;
    },
    [userSignup.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    // signin
    [userSignin.fulfilled]: (state, action) => {
      state.user = action.payload.data.registeredUser;

      state.isLoading = false;
      state.token = action.payload.data.token;
      state.error = "";
    },
    [userSignin.pending]: (state, action) => {
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

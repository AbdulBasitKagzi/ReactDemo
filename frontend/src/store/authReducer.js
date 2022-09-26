import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let authState = {
  token: "",
  isLoading: "",
  error: "",
};

// for user sign up
export const userSignup = createAsyncThunk("signup", async (body, thunkAPI) => {
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
    console.log(res);

    // console.log("---------res-------", res.data.token);
    localStorage.setItem("token", JSON.stringify(token));
    return res;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.error);
  }
});

// for user signin/login
export const userSignin = createAsyncThunk("signin", async (body, thunkAPI) => {
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
    localStorage.setItem("token", JSON.stringify(token));
    return res;
  } catch (error) {
    console.log(error.response.data.error);
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});

const authSlice = createSlice({
  name: "authSlice",
  initialState: authState,
  reducers: {
    logOut(state, action) {
      state.token = "";
    },
  },
  extraReducers: {
    [userSignup.fulfilled]: (state, action) => {
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
    [userSignin.fulfilled]: (state, action) => {
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

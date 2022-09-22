import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const signupState = {
  token: "",
  isLoading: "",
  error: "",
};

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
    // console.log("---------res-------", res.data.token);
    // localStorage.setItem("token", JSON.stringify(token));
    return res;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.error);
  }
});

const signupSlice = createSlice({
  name: "signup",
  initialState: signupState,
  extraReducers: {
    [userSignup.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);
    },
    [userSignup.pending]: (state, action) => {
      state.isLoading = true;

      state.error = "";
    },
    [userSignup.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default signupSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
const vehicleState = {
  vehicles: "",
  vehicleType: [],
  isLoading: "",
  error: "",
};

// api to get vehicles
export const getVehicle = createAsyncThunk(
  "getVehicle",
  async (body, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/transportgoodsservice/getVehicle",
        {
          header: {
            "Content-Type":
              "application/x-www-form-urlencoded; charset=UTF-8;application/json",
          },
        }
      );
      console.log("getvehicle", response);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// reducer to get vehicles
const vehicleSlice = createSlice({
  name: "vehicle",
  initialState: vehicleState,
  extraReducers: {
    [getVehicle.fulfilled]: (state, action) => {
      console.log("action", action.payload.data.findVehicle);
      state.vehicles = action.payload;
      state.vehicleType = action.payload.data.findVehicle.map((type) => {
        return type.type;
      });
      state.isLoading = false;
    },
    [getVehicle.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getVehicle.rejected]: (state, action) => {
      console.log("rejected", action);
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default vehicleSlice.reducer;

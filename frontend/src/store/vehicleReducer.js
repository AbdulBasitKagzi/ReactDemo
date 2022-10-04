import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
const vehicleState = {
  vehicles: "",
  vehicleType: [],
  isLoading: "",
  error: "",
  update: "",
};

const api = process.env.REACT_APP_URL;

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

// to delete vehicle
export const deleteVehicle = createAsyncThunk(
  "vehicleSlice/deletevehicle",
  async (body, thunkApi) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/transportgoodsservice/deletevehicle/${body}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      thunkApi.dispatch(getVehicle());
      return response;
    } catch (error) {
      console.log("FrontEnd-deletevehicleError", error);
      thunkApi.rejectWithValue(error);
    }
  }
);

// reducer to get vehicles
const vehicleSlice = createSlice({
  name: "vehicle",
  initialState: vehicleState,
  reducers: {
    clearMessage(state, action) {
      state.update = false;
    },
  },
  extraReducers: {
    [getVehicle.fulfilled]: (state, action) => {
      console.log("action", action.payload.data.findVehicle);
      state.vehicles = action.payload;
      state.vehicleType = action.payload.data.findVehicle.map((type) => {
        return type;
      });
      state.isLoading = false;
    },
    [getVehicle.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getVehicle.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [deleteVehicle.fulfilled]: (state, action) => {
      state.update = true;

      state.error = action.payload.data.message;
    },
    [deleteVehicle.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteVehicle.rejected]: (state, action) => {
      state.update = false;
    },
  },
});

export const vehicleAction = vehicleSlice.actions;
export default vehicleSlice.reducer;

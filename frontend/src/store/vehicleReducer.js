import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
const vehicleState = {
  vehicles: "",
  vehicleType: [],
  isLoading: "",
  error: "",
  update: "",
  Delete: "",
  add: "",
  open: "",
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
      return thunkApi.rejectWithValue(error);
    }
  }
);

// to add vehicle
export const addVehicle = createAsyncThunk(
  "vehicleSlice/addVehicle",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/transportgoodsservice/addVehicle",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("addVehicle----res", response);
      thunkAPI.dispatch(getVehicle());
      return response;
    } catch (error) {
      console.log("addvehiclethunk---rejected", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// reducer for vehicles
const vehicleSlice = createSlice({
  name: "vehicle",
  initialState: vehicleState,
  reducers: {
    clearMessage(state, action) {
      state.update = false;
      state.open = false;
    },
  },
  extraReducers: {
    [getVehicle.fulfilled]: (state, action) => {
      console.log("actionfor get vehicle", action.payload.data.findVehicle);
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
      state.Delete = true;
      state.open = true;
      console.log("fullfileed", action.payload);
      state.error = action.payload.data.message;
    },
    [deleteVehicle.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteVehicle.rejected]: (state, action) => {
      console.log("rejected", action.payload);
      state.Delete = true;
      state.error = action.payload.data.message;
      state.open = true;
    },
    [addVehicle.fulfilled]: (state, action) => {
      console.log("addVehicle---full", action.payload);
      state.vehicles = action.payload.data.newVehicle;
      state.isLoading = false;
      state.add = true;
      state.error = action.payload.data.message;
      state.open = true;
    },
    [addVehicle.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addVehicle.rejected]: (state, action) => {
      console.log("addVehicle Rejected", action.payload);
      state.error = action.payload.response.data.message;
      state.isLoading = false;
      state.add = false;
      state.open = true;
    },
  },
});

export const vehicleAction = vehicleSlice.actions;
export default vehicleSlice.reducer;

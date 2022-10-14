import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
const vehicleState = {
  vehicles: "",
  vehicleType: [],
  isLoading: "",
  error: "",

  update: "",
  updateMessage: "",
  updateOpen: "",

  Delete: "",
  deleteMessage: "",
  deleteOpen: "",

  add: "",
  addMessage: "",
  addOpen: "",
};

const API = process.env.REACT_APP_URL;

// api to get vehicles
export const getVehicle = createAsyncThunk(
  "getVehicle",
  async (body, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/transportgoodsservice/getVehicle`,
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
        `http://localhost:5000/transportgoodsservice/addVehicle`,
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

// to update vehicle
export const updateVehicles = createAsyncThunk(
  "/vehicleSlice/updateVehicles",
  async (body, thunkAPI) => {
    try {
      const response = await axios.patch(
        `${API}/updateVehicle/${body.id}`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      thunkAPI.rejectWithValue(getVehicle());
      return response;
    } catch (error) {
      console.log("thunk reject error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// api to upload image


// reducer for vehicles
const vehicleSlice = createSlice({
  name: "vehicle",
  initialState: vehicleState,
  reducers: {
    clearMessage(state, action) {
      state.deleteOpen = false;
      state.addOpen = false;
      state.updateOpen = false;
    },
  },
  extraReducers: {
    [getVehicle.fulfilled]: (state, action) => {
      state.vehicles = action.payload;
      state.vehicleType = action.payload.data.findVehicle.map((type) => {
        return type;
      });
      state.isLoading = false;
    },
    [getVehicle.pending]: (state) => {
      state.isLoading = true;
    },
    [getVehicle.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [deleteVehicle.fulfilled]: (state, action) => {
      console.log("delvehreject", action.payload.data.message);
      state.Delete = true;
      state.deleteOpen = true;
      state.deleteMessage = action.payload.data.message;
    },
    [deleteVehicle.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteVehicle.rejected]: (state, action) => {
      state.Delete = false;
      state.deleteMessage = action.payload.response.data.message;
      state.deleteOpen = true;
    },
    [addVehicle.fulfilled]: (state, action) => {
      state.vehicles = action.payload.data.newVehicle;
      state.isLoading = false;
      state.add = true;
      state.addMessage = action.payload.data.message;
      state.addOpen = true;
    },
    [addVehicle.pending]: (state) => {
      state.isLoading = true;
    },
    [addVehicle.rejected]: (state, action) => {
      state.addMessage = action.payload.response.data.message;
      state.isLoading = false;
      state.add = false;
      state.addOpen = true;
    },
    [updateVehicles.fulfilled]: (state, action) => {
      console.log("update fulfilled", action.payload.data.message);
      state.update = true;
      state.updateMessage = action.payload.data.message;
      state.isLoading = false;
      state.updateOpen = true;
    },
    [updateVehicles.pending]: (state) => {
      state.isLoading = true;
    },
    [updateVehicles.rejected]: (state, action) => {
      console.log("update rejected", action.payload.response.data.message);
      state.update = false;
      state.updateMessage = action.payload.response.data.message;
      state.isLoading = false;
      state.updateOpen = true;
    },
  },
});

export const vehicleAction = vehicleSlice.actions;
export default vehicleSlice.reducer;

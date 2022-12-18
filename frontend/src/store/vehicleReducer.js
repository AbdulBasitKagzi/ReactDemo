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

const api = process.env.REACT_APP_URL;

// api to get vehicles
export const getVehicle = createAsyncThunk(
  "getVehicle",
  async (body, thunkAPI) => {
    try {
      const response = await axios.get(`${api}/getVehicle`, {
        header: {
          "Content-Type":
            "application/x-www-form-urlencoded; charset=UTF-8;application/json",
        },
      });

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// to delete vehicle
export const deleteVehicle = createAsyncThunk(
  "vehicleSlice/deletevehicle",
  async (body, thunkApi) => {
    try {
      const response = await axios.delete(`${api}/deletevehicle/${body}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      thunkApi.dispatch(getVehicle());
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

// to add vehicle
export const addVehicle = createAsyncThunk(
  "vehicleSlice/addVehicle",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(`${api}/addVehicle`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      thunkAPI.dispatch(getVehicle());
      return response;
    } catch (error) {
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
        `${api}/updateVehicle/${body.id}`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      thunkAPI.dispatch(getVehicle());
      return response;
    } catch (error) {
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
    clearMessage(state) {
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
      state.Delete = true;
      state.deleteOpen = true;
      state.deleteMessage = action.payload.data.message;
      state.isLoading = false;
    },
    [deleteVehicle.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteVehicle.rejected]: (state, action) => {
      state.Delete = false;
      state.deleteMessage = action.payload.response.data.message;
      state.deleteOpen = true;
      state.isLoading = false;
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
      state.update = true;
      state.updateMessage = action.payload.data.message;
      state.isLoading = false;
      state.updateOpen = true;
    },
    [updateVehicles.pending]: (state) => {
      state.isLoading = true;
    },
    [updateVehicles.rejected]: (state, action) => {
      state.update = false;
      state.updateMessage = action.payload.response.data.message;
      state.isLoading = false;
      state.updateOpen = true;
    },
  },
});

export const vehicleAction = vehicleSlice.actions;
export default vehicleSlice.reducer;

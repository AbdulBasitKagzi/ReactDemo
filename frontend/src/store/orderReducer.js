import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const orderState = {
  isLoading: "",
  error: "",
  data: "",
  orderData: [],
};

const API = process.env.REACT_APP_URL;

// to add order
export const order = createAsyncThunk(
  "orderSlice/order",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/transportgoodsservice/placeOrder`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

// to get order
export const getOrder = createAsyncThunk(
  "orderSlice/getOrder",
  async (body, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/transportgoodsservice/orders`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("order res---", response);
      return response;
    } catch (error) {
      console.log("get order error----", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: orderState,
  reducers: {
    addOrder(state, action) {
      state.data = action.payload;
    },
  },

  // to handle api states:fullfilled, rejected, pending
  extraReducers: {
    [order.fulfilled]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [order.pending]: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    [order.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getOrder.fulfilled]: (state, action) => {
      console.log("getorder fullfilled----", action.payload);
      state.orderData = action.payload.data;
      state.isLoading = false;
      state.error = action.payload;
    },
    [getOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [getOrder.rejected]: (state, action) => {
      console.log("getorder rejected----", action.payload);
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const orderAction = orderSlice.actions;

export default orderSlice.reducer;

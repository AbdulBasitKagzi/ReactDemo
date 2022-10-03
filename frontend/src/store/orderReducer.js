import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const orderState = {
  isLoading: "",
  error: "",
  data: "",
};

export const order = createAsyncThunk(
  "orderSlice/order",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/transportgoodsservice/placeOrder",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("orderres", response);
      return response;
    } catch (error) {
      console.log(error);
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
    [order.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
    [order.pending]: (state, action) => {
      state.isLoading = true;
      state.error = "";
    },
    [order.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const orderAction = orderSlice.actions;

export default orderSlice.reducer;

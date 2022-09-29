import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const orderState = {
  pickupLocation: "",
  destinationLocation: "",
  vehicleType: "",
  goodsType: "",
  weight: "",
};


const orderSlice = createSlice({
  name: "order",
  initialState: orderState,
  reducers: {
    addOrder(state, action) {
      console.log("action for order", action);
      state.pickupLocation = action.payload.pickUp;
      state.destinationLocation = action.payload.destination;
      state.vehicleType = action.payload.vehicle;
      state.goodsType = action.payload.goodsType;
      state.weight = action.payload.Weight;
    },
  },
});

export const orderAction = orderSlice.actions;

export default orderSlice.reducer;

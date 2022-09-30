import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const orderState = {};

const orderSlice = createSlice({
  name: "order",
  initialState: orderState,
  reducers: {
    addOrder(state, action) {
      console.log("action for order", action);
      // state.pickupLocation = action.payload.pickUp;
      // state.destinationLocation = action.payload.destination;
      // state.vehicleType = action.payload.vehicle;
      // state.goodsType = action.payload.goodsType;
      // state.weight = action.payload.Weight;
      // state.pickUpAddress = action.payload.pAddress;
      // state.deliveryAddress = action.payload.dAddress;

      return { ...state, ...action.payload };
    },
  },
});

export const orderAction = orderSlice.actions;

export default orderSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authReducer";
import vehicleSlice from "./vehicleReducer";
import goodsSlice from "./goodsReducer";
import orderSlice from "./orderReducer";

// store for reducers
const store = configureStore({
  reducer: {
    user: authSlice,
    vehicle: vehicleSlice,
    goods: goodsSlice,
    order: orderSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), 
});

export default store;

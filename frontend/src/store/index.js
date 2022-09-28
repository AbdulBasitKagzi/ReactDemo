import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authReducer";
import vehicleSlice from "./vehicleReducer";
import goodsSlice from "./goodsReducer";

const store = configureStore({
  reducer: {
    user: authSlice,
    vehicle: vehicleSlice,
    goods: goodsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ["payload.callback"],
      },
    }),
});

export default store;

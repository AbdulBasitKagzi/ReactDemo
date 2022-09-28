import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initialState
const goodsState = {
  goods: [],
  isLoading: "",
  error: "",
};

// to fetch goods type
export const getGoods = createAsyncThunk("getGoods", async (body, thunkAPI) => {
  try {
    const response = await axios.get(
      "http://localhost:5000/transportgoodsservice/getGoods",
      {
        header: {
          "Content-Type":
            "application/x-www-form-urlencoded; charset=UTF-8;application/json",
        },
      }
    );
    console.log("getgoods", response);
    return response;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

// reducers to get goods
const goodsSlice = createSlice({
  name: "goods",
  initialState: goodsState,
  extraReducers: {
    [getGoods.fulfilled]: (state, action) => {
      state.goods = action.payload.data.good;
      console.log(state.goods);
      state.isLoading = false;
    },
    [getGoods.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getGoods.rejected]: (state, action) => {
      console.log("rejected", action);
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default goodsSlice.reducer;

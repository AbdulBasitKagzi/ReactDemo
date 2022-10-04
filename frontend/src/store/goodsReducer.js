import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state that can be updated by reducer action and can be sent to backend
const goodsState = {
  goods: [],
  isLoading: "",
  error: "",
  update: "",
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
// to delete goods
export const deleteGoods = createAsyncThunk(
  "goodSlice/deletegoods",
  async (body, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/transportgoodsservice/deletegoods/${body}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      thunkAPI.dispatch(getGoods());
      return response;
    } catch (error) {
      console.log("delete goods rejectwith value error", error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

// reducers to get goods and delete goods
const goodsSlice = createSlice({
  name: "goods",
  initialState: goodsState,
  reducers: {
    clearMessage(state, action) {
      state.update = false;
    },
  },
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
    [deleteGoods.fulfilled]: (state, action) => {
      state.update = true;
      state.error = action.payload.data.message;
      console.log("successpayload", action.payload);
    },
    [deleteGoods.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteGoods.rejected]: (state, action) => {
      console.log("errorpayload", action.payload);
      state.error = action.payload;
    },
  },
});

export const goodsAction = goodsSlice.actions;
export default goodsSlice.reducer;

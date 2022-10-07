import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// initial state that can be updated by reducer action and can be sent to backend
const goodsState = {
  goods: "",
  goodsType: [],
  isLoading: "",
  error: "",
  update: "",
  Delete: "",
  add: "",
  open: "",
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

// to add goods type
export const addGoods = createAsyncThunk(
  "goodsSlice/addGoods",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/transportgoodsservice/addGoods",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("addGoods--res", response);
      thunkAPI.dispatch(getGoods());
      return response;
    } catch (error) {
      console.log("rejectwith--Error--addGoods", error);
      return thunkAPI.rejectWithValue(error);
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
      state.open = false;
    },
  },
  extraReducers: {
    [getGoods.fulfilled]: (state, action) => {
      state.goods = action.payload;
      state.goodsType = action.payload.data.good.map((type) => {
        return type;
      });
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
      state.Delete = true;
      state.error = action.payload.data.message;
      state.open = true;
      console.log("successpayload", action.payload);
    },
    [deleteGoods.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteGoods.rejected]: (state, action) => {
      console.log("errorpayload", action.payload);
      state.error = action.payload;
      state.Delete = false;
      state.open = true
    },
    [addGoods.fulfilled]: (state, action) => {
      state.add = true;
      state.isLoading = false;
      console.log("addGoods===full", action.payload);
      state.goods = action.payload.data.good;
      console.log("fulfilled", state.goods);
      state.open = true;
      state.error = action.payload.data.message;
    },
    [addGoods.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addGoods.rejected]: (state, action) => {
      console.log(action.payload);
      state.add = false;
      state.open = "true";
      state.error = action.payload.response.data.message;
    },
  },
});

export const goodsAction = goodsSlice.actions;
export default goodsSlice.reducer;

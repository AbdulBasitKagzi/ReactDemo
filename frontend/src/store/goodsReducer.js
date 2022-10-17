import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = process.env.REACT_APP_URL;
// initial state that can be updated by reducer action and can be sent to backend
const goodsState = {
  goods: "",
  goodsType: [],
  isLoadingG: "",
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
  open: "",
};

// to fetch goods type
export const getGoods = createAsyncThunk("getGoods", async (body, thunkAPI) => {
  try {
    const response = await axios.get(`${api}/getGoods`, {
      header: {
        "Content-Type":
          "application/x-www-form-urlencoded; charset=UTF-8;application/json",
      },
    });

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
      const response = await axios.delete(`${api}/deletegoods/${body}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      thunkAPI.dispatch(getGoods());
      return response;
    } catch (error) {
      console.log("delete goods rejectwith value error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// to add goods type
export const addGoods = createAsyncThunk(
  "goodsSlice/addGoods",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post(`${api}/addGoods`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      thunkAPI.dispatch(getGoods());
      return response;
    } catch (error) {
      console.log("rejectwith--Error--addGoods", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// to update goods
export const updateGoods = createAsyncThunk(
  "goodsSlice/updateGood",
  async (body, thunkAPI) => {
    try {
      const response = await axios.patch(
        `${api}/updateGoods/${body.id}`,
        body,
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
      console.log("updateGoods thunk error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// reducers to get goods and delete goods
const goodsSlice = createSlice({
  name: "goods",
  initialState: goodsState,
  reducers: {
    clearMessage(state) {
      state.updateOpen = false;
      state.deleteOpen = false;
      state.addOpen = false;
    },
  },
  extraReducers: {
    [getGoods.fulfilled]: (state, action) => {
      state.goods = action.payload;
      state.goodsType = action.payload.data.good.map((type) => {
        return type;
      });

      state.isLoadingG = false;
    },
    [getGoods.pending]: (state) => {
      state.isLoadingG = true;
    },
    [getGoods.rejected]: (state, action) => {
      state.isLoadingG = false;
      state.error = action.error.message;
    },
    [deleteGoods.fulfilled]: (state, action) => {
      state.Delete = true;
      state.deleteMessage = action.payload.data.message;
      state.deleteOpen = true;
    },
    [deleteGoods.pending]: (state) => {
      state.isLoadingG = true;
    },
    [deleteGoods.rejected]: (state, action) => {
      state.deleteMessage = action.payload.response.data.message;
      state.Delete = false;
      state.deleteOpen = true;
    },
    [addGoods.fulfilled]: (state, action) => {
      state.isLoadingG = false;
      state.goods = action.payload.data.good;
      state.add = true;
      state.addOpen = true;
      state.addMessage = action.payload.data.message;
    },
    [addGoods.pending]: (state, action) => {
      state.isLoadingG = true;
    },
    [addGoods.rejected]: (state, action) => {
      state.add = false;
      state.addOpen = true;
      state.addMessage = action.payload.response.data.message;
    },
    [updateGoods.fulfilled]: (state, action) => {
      state.update = true;
      state.updateMessage = action.payload.data.message;
      state.updateOpen = true;
    },
    [updateGoods.pending]: (state, action) => {
      state.isLoadingG = true;
    },
    [updateGoods.rejected]: (state, action) => {
      state.update = false;
      state.updateMessage = action.payload.response.data.message;
      state.updateOpen = true;
    },
  },
});

export const goodsAction = goodsSlice.actions;
export default goodsSlice.reducer;

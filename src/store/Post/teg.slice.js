import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTegList = createAsyncThunk("teglist/get", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get("https://megalab.pythonanywhere.com/tag/", {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});

export const newsSlice = createSlice({
  name: "tegs",
  initialState: {
    tegList: {},
  },

  extraReducers: (builder) => {
    builder.addCase(getTegList.fulfilled, (state, action) => {
      state.tegList = action.payload;
    });
  },
});

export const tegsReducer = newsSlice.reducer;

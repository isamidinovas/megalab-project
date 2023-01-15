import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNewsThunk = createAsyncThunk(
  "getNews",
  async ({ search, tag }) => {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      `https://megalab.pythonanywhere.com/post/?search=${search}&tag=${tag}`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    return response.data;
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsList: [],
    loading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getNewsThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getNewsThunk.fulfilled, (state, action) => {
      state.newsList = action.payload;
      state.loading = false;
    });
  },
});

export const newsReducer = newsSlice.reducer;

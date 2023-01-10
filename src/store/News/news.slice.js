import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNewsThunk = createAsyncThunk("getNews", async (tag) => {
  const postIds = JSON.parse(localStorage.getItem("myPosts")) || [];
  const token = localStorage.getItem("token");
  // const response = await axios.get("https://megalab.pythonanywhere.com/post/", {
  const response = await axios.get(
    // `https://megalab.pythonanywhere.com/post/?tag=${tag}`,
    "https://megalab.pythonanywhere.com/post/",
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );
  return response.data;
});
export const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsList: {},
  },

  extraReducers: (builder) => {
    builder.addCase(getNewsThunk.fulfilled, (state, action) => {
      state.newsList = action.payload;
    });
  },
});

export const newsReducer = newsSlice.reducer;

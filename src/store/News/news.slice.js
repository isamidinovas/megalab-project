import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNewsThunk = createAsyncThunk("getNews", async () => {
  const postIds = JSON.parse(localStorage.getItem("myPosts")) || [];
  const token = localStorage.getItem("token");
  const response = await axios.get("https://megalab.pythonanywhere.com/post/", {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return response.data;
});

export const getPostLike = createAsyncThunk("postLike/get", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get("https://megalab.pythonanywhere.com/like/", {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  console.log("urooo");
  return response.data;
});
export const newsSlice = createSlice({
  name: "news",
  initialState: {
    status: "",
    newsList: {},
  },

  extraReducers: (builder) => {
    builder.addCase(getNewsThunk.fulfilled, (state, action) => {
      state.newsList = action.payload;
    });
    builder.addCase(getPostLike.fulfilled, (state, action) => {
      state.newsList = action.payload;
    });
    builder.addCase(getPostLike.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export const newsReducer = newsSlice.reducer;

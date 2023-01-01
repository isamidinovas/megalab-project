import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getNewsThunk = createAsyncThunk("getNews", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get("https://megalab.pythonanywhere.com/post/", {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return response.data;
});
export const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsList: {
      id: 1,
      date: "",
      title: "",
      text: "",
      image: null,
      tag: "",
      is_liked: false,
      comment: "",
      short_desc: "",
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNewsThunk.fulfilled, (state, action) => {
      state.newsList = action.payload;
    });
  },
});

export const newsReducer = newsSlice.reducer;

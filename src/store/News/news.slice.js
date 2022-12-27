import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsInfo: {
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

  //   extraReducers: (builder) => {
  //     builder.addCase(newsShow.fulfilled, (state, action) => {
  //       state.newsInfo = action.payload;
  //     });
  //   },
});

export const newsReducer = newsSlice.reducer;

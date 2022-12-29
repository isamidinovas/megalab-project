import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { postsService } from "../../service";
export const getNewsThunk = createAsyncThunk("getNews", async () => {
  return postsService.getPosts();
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
      console.log("getNewsThunk.fulfilled", action.payload);
      state.newsList = action.payload;
    });
  },
 
});

export const newsReducer = newsSlice.reducer;

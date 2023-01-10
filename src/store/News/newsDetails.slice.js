import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostDetail = createAsyncThunk("postdetail/get", async (id) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(
    `https://megalab.pythonanywhere.com/post/${id}/`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );
  return response.data;
});
export const createComment = createAsyncThunk(
  "comment/create",
  async (data) => {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "https://megalab.pythonanywhere.com/comment/",
      data,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    return response.data;
  }
);

export const replyComment = createAsyncThunk("comment/reply", async (data) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    "https://megalab.pythonanywhere.com/comment/",
    data,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );
  return response.data;
});

export const newsDetailSlice = createSlice({
  name: "newsDetail",
  initialState: {
    newsDetail: {},
  },

  extraReducers: (builder) => {
    builder.addCase(getPostDetail.fulfilled, (state, action) => {
      state.newsDetail = action.payload;
    });
    builder.addCase(createComment.fulfilled, (state, action) => {
      state.newsDetail.comment = [...state.newsDetail.comment, action.payload];
    });
    builder.addCase(replyComment.fulfilled, (state, action) => {
      state.newsDetail = action.payload;
    });
  },
});

export const newsDetailReducer = newsDetailSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostLike = createAsyncThunk("postLike/get", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get("https://megalab.pythonanywhere.com/like/", {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return response.data;
});

export const likePost = createAsyncThunk("post/like", async (data) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    "https://megalab.pythonanywhere.com/like/",
    data,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );
  return response.data;
});

export const unLikePost = createAsyncThunk("post/unLike", async (data) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    "https://megalab.pythonanywhere.com/like/",
    data,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );
  return response.data;
});

export const postLikeSlice = createSlice({
  name: "postLike",
  initialState: {
    likedPosts: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getPostLike.fulfilled, (state, action) => {
      state.likedPosts = action.payload;
    });
    builder.addCase(likePost.fulfilled, (state, action) => {
      state.likedPosts = true;
    });
    builder.addCase(unLikePost.fulfilled, (state, action) => {
      state.likedPosts = false;
    });
  },
});

export const postLikeReducer = postLikeSlice.reducer;

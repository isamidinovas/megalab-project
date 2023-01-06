import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const postCreate = createAsyncThunk("post/create", async (data) => {
  const token = localStorage.getItem("token");
  const postIds = JSON.parse(localStorage.getItem("myPosts")) || [];
  const response = await axios.post(
    "https://megalab.pythonanywhere.com/post/",
    data,
    {
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if (response.data.id) {
    localStorage.setItem(
      "myPosts",
      JSON.stringify([...postIds, response.data.id])
    );
  }

  return response.data;
});

export const postDelete = createAsyncThunk(
  "post/postDelete",
  async (id, { dispatch }) => {
    const token = localStorage.getItem("token");
    const response = await axios.delete(
      `https://megalab.pythonanywhere.com/post/${id}/`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    return response.data;
  }
);

export const getTegList = createAsyncThunk("teglist/get", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(
    "https://megalab.pythonanywhere.com/logout/",
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});

export const postSlice = createSlice({
  name: "post",
  userId: "",
  initialState: [],

  // reducers: {
  //   removePost(state, action) {
  //     state.post = state.post.filter((post) => post.id !== action.payload.id);
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(postCreate.fulfilled, (state, action) => {
      const payload = action.payload;
      state.push(action.payload);
    });
  },
});

export const { removePost, likePost } = postSlice.actions;
export const postReducer = postSlice.reducer;

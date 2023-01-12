import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const postCreate = createAsyncThunk("post/create", async (formData) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    "https://megalab.pythonanywhere.com/post/",
    formData,
    {
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
});

export const postDelete = createAsyncThunk("post/postDelete", async (id) => {
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
});

export const getMyPosts = createAsyncThunk(
  "get/myPosts",
  async (author_nickname) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `https://megalab.pythonanywhere.com/post/?author=${author_nickname}`,

      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    return response.data;
  }
);

export const getTagList = createAsyncThunk("taglist/get", async () => {
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

  initialState: {
    myPostsList: {},
  },

  // reducers: {
  //   removePost(state, action) {
  //     state.post = state.post.filter((post) => post.id !== action.payload.id);
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(postCreate.fulfilled, (state, action) => {
      // const payload = action.payload;
      // state.push(action.payload);
    });
    builder.addCase(getMyPosts.fulfilled, (state, action) => {
      state.myPostsList = action.payload;
    });
  },
});

export const { removePost, likePost } = postSlice.actions;
export const postReducer = postSlice.reducer;

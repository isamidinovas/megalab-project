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
  async ({ author, search }) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `https://megalab.pythonanywhere.com/post/?search=${search}&author=${author}`,

      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    return response.data;
  }
);

export const postSlice = createSlice({
  name: "post",
  userId: "",

  initialState: {
    myPostsList: {},
    loading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getMyPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMyPosts.fulfilled, (state, action) => {
      state.myPostsList = action.payload;
      state.loading = false;
    });
  },
});

export const { removePost, likePost } = postSlice.actions;
export const postReducer = postSlice.reducer;

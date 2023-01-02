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

export const getPostDetail = createAsyncThunk(
  "postdetail/get",
  async ({ id }) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `https://megalab.pythonanywhere.com/post/${id}/`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    console.log("nuu", response.data);
    return response.data;
  }
);
export const createComment = createAsyncThunk(
  "comment/create",
  async (data) => {
    const token = localStorage.getItem("token");
    const commentIds = JSON.parse(localStorage.getItem("myComments")) || [];
    const response = await axios.post(
      "https://megalab.pythonanywhere.com/comment/",
      data,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    if (response.data.id) {
      localStorage.setItem(
        "myComments",
        JSON.stringify([...commentIds, response.data.id])
      );
    }
    console.log("urooo");
    return response.data;
  }
);
export const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsList: {
      id: "",
      date: "",
      title: "",
      text: "",
      image: null,
      tag: "",
      is_liked: false,
      short_desc: "",
      comment: {
        post: "",
        user: {
          id: "",
          nickname: "",
          name: "",
          last_name: "",
          profile_image: null,
        },
        text: "",
        child: [],
      },
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getNewsThunk.fulfilled, (state, action) => {
      state.newsList = action.payload;
    });
    builder.addCase(getPostDetail.fulfilled, (state, action) => {
      state.newsList = action.payload;
    });
    builder.addCase(createComment.fulfilled, (state, action) => {
      state = action.payload;
      const { id } = action.payload;
      localStorage.setItem("post", id);
      state.user = action.payload;
      state.newsList.post = id;
    });
  },
});

// export const { likePost } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;

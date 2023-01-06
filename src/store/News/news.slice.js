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

// export const getPostLike = createAsyncThunk("postLike/get", async () => {
//   const token = localStorage.getItem("token");
//   const response = await axios.get("https://megalab.pythonanywhere.com/like/", {
//     headers: {
//       Authorization: `token ${token}`,
//     },
//   });
//   console.log("urooo");
//   return response.data;
// });

// export const likePost = createAsyncThunk("post/like", async (data) => {
//   const token = localStorage.getItem("token");
//   const response = await axios.post(
//     "https://megalab.pythonanywhere.com/like/",
//     data,
//     {
//       headers: {
//         Authorization: `token ${token}`,
//       },
//     }
//   );
//   return response.data;
// });

// export const unLikePost = createAsyncThunk("post/unLike", async (data) => {
//   const token = localStorage.getItem("token");
//   const response = await axios.post(
//     "https://megalab.pythonanywhere.com/like/",
//     data,
//     {
//       headers: {
//         Authorization: `token ${token}`,
//       },
//     }
//   );
//   return response.data;
// });
export const newsSlice = createSlice({
  name: "news",
  initialState: {
    // status: "",
    newsList: {},
    // likePosts: {},
  },
  // reducers: {
  //   deleteItemFromCart: (state, action) => {
  //     state.likePosts = state.likePosts.filter(
  //       (item) => item.id !== action.payload
  //     );
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(getNewsThunk.fulfilled, (state, action) => {
      state.newsList = action.payload;
    });
    // builder.addCase(getPostLike.fulfilled, (state, action) => {
    //   state.likePosts = action.payload;
    // });
    // builder.addCase(likePost.fulfilled, (state, action) => {
    //   state.likePosts = state.likePosts;
    // });
    // builder.addCase(unLikePost.fulfilled, (state, action) => {
    //   state.likePosts = state.likePosts.filter(
    //     (item) => item.id !== action.payload
    //   );
    // });
  },
});

export const newsReducer = newsSlice.reducer;

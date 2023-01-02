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

// export const accountUser = createAsyncThunk("user/account", async () => {
//   const token = localStorage.getItem("token");
//   const response = await axios.get("https://megalab.pythonanywhere.com/user/", {
//     headers: {
//       Authorization: `token ${token}`,
//     },
//   });
//   if (!response.status) {
//     throw new Error("Server error");
//   }

//   return response.data;
// });

export const getPostDetail = createAsyncThunk(
  "postdetail/get",
  async ({ id }) => {
    const token = localStorage.getItem("token");
    // const postIds = JSON.parse(localStorage.getItem("myPosts")) || [];
    const response = await axios.get(
      `https://megalab.pythonanywhere.com/post/${id}/`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    // if (response.data.id) {
    //   localStorage.setItem(
    //     "myPosts",
    //     JSON.stringify([...postIds, response.data.id])
    //   );
    // }
    console.log("nuu", response.data);
    return response.data;
  }
);
// export const likePosts = createAsyncThunk("posts/like", async (post) => {
//   const token = localStorage.getItem("token");
//   const response = await axios.post(
//     "https://megalab.pythonanywhere.com/like/",
//     post,
//     {
//       headers: {
//         Authorization: `token ${token}`,
//       },
//     }
//   );
//   // dispatch(likePost(data));
//   console.log("like");
//   return response.data;
// });
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
      comment: "",
      short_desc: "",
    },
  },

  // reducers: {
  //   likePost(state, action) {
  //     state.likedPosts.push(action.payload);
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(getNewsThunk.fulfilled, (state, action) => {
      state.newsList = action.payload;
    });
    builder.addCase(getPostDetail.fulfilled, (state, action) => {
      state.newsList = action.payload;
    });
    // builder.addCase(likePosts.fulfilled, (state, action) => {
    //   state = action.payload;
    // });
  },
});

// export const { likePost } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;

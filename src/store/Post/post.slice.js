import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { postsService } from "../../service/index.js";
export const getNewsThunk = createAsyncThunk("getNews", async () => {
  return postsService.getPosts();
});
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

export const postSlice = createSlice({
  name: "post",
  userId: "",
  initialState: [
    {
      id: "",
      date: "",
      title: "",
      text: "",
      image: "",
      tag: "",
      is_liked: false,
      comment: "",
      short_desc: "",
    },
  ],

  extraReducers: (builder) => {
    builder.addCase(postCreate.fulfilled, (state, action) => {
      const payload = action.payload;
      state.push(action.payload);
    });
    builder.addCase(getNewsThunk.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});
// reducers: {
//   addNew(state, action) {
//     state.push(action.payload);
//   },
//   addToFavorites(state, action) {
//     state.forEach((item) => {
//       if (item.id === action.id) {
//         item.favourite = true;
//       }
//     });
//   },
// },

// export const newsReducer = newsSlice.reducer;

// export const { addNew, addToFavorites } = newsSlice.actions;
export const postReducer = postSlice.reducer;

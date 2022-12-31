import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { postsService } from "../../service/index.js";
export const getNewsThunk = createAsyncThunk("getNews", async () => {
  return postsService.getPosts();
});
export const postCreate = createAsyncThunk("post/create", async (data) => {
  const token = localStorage.getItem("token");
  console.log("t", token);
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
    dispatch(removePost(id));
    return response.data;
  }
);

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

  reducers: {
    removePost(state, action) {
      state.post = state.post.filter((post) => post.id !== action.payload.id);
    },
  },

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

export const { removePost } = postSlice.actions;
export const postReducer = postSlice.reducer;

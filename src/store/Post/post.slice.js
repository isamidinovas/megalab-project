import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postCreate = createAsyncThunk(
  "post/create",
  async ({ id, title, text, image, tag, short_desc }) => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    const response = await axios.post(
      "https://megalab.pythonanywhere.com/post/",
      {
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "multipart/form-data",
        },
      },
      {
        id,
        title,
        text,
        image,
        tag,
        short_desc,
      }
    );

    console.log("resp data", response.data);
    return response.data;
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState: {
    postInfo: {
      id: 1,
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

  extraReducers: (builder) => {
    builder.addCase(postCreate.fulfilled, (state, action) => {
      const { id } = action.payload;
      localStorage.setItem("userId", id);
      state.user = action.payload;
      state.userId = id;
      localStorage.setItem("token", action.payload.token);
      state.userToken = action.payload;
      state.postInfo = action.payload;
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

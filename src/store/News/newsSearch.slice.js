import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const getPostDetail = createAsyncThunk("postdetail/get", async (id) => {
//   const token = localStorage.getItem("token");
//   const response = await axios.get(
//     `https://megalab.pythonanywhere.com/post/${id}/`,
//     {
//       headers: {
//         Authorization: `token ${token}`,
//       },
//     }
//   );
//   return response.data;
// });

export const getPostList = createAsyncThunk("postList/get", async (tag) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(
    `https://megalab.pythonanywhere.com/post/?tag=${tag}`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );
  return response.data;
});
export const searchSlice = createSlice({
  name: "search",
  initialState: {
    postList: {},
  },

  extraReducers: (builder) => {
    builder.addCase(getPostList.fulfilled, (state, action) => {
      state.postList = action.payload;
    });
  },
});

export const searchReducer = searchSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTagList = createAsyncThunk("taglist/get", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get("https://megalab.pythonanywhere.com/tag/", {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});

export const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    tagList: {},
  },

  extraReducers: (builder) => {
    builder.addCase(getTagList.fulfilled, (state, action) => {
      state.tagList = action.payload;
    });
  },
});

export const tagsReducer = tagsSlice.reducer;

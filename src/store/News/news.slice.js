import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { newsItemState } from "./news.state";





export const newsSlice = createSlice({
  name: "news",
  initialState: [
    {
      id: 1,
      date: "29.11.2000",
      title: "Заголовок новости",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis",
      author: "Symbat",
      favourite: false,
      type: "sport",
    },
  ],
  reducers: {
    addNew(state, action) {
      state.push(action.payload);
    },
    addToFavorites(state, action) {
      state.forEach((item) => {
        if (item.id === action.id) {
          item.favourite = true;
        }
      });
    },
  },
  
});
export const newsReducer = newsSlice.reducer;

export const { addNew, addToFavorites } = newsSlice.actions;


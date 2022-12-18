import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authenticateUser = createAsyncThunk(
  "user/authenticate",
  async ({ name, nickname, last_name, password, password2 }) => {
    const response = await axios.post(
      "https://megalab.pythonanywhere.com/registration/",
      {
        nickname,
        name,
        last_name,
        password,
        password2,
      }
    );
    return response.data;
  }
);

export const profileSlice = createSlice({
  name: "news",
  initialState: {
    id: 1,
    name: "Symbat",
    surname: "Isamidinove",
    login: "symbat_fronted",
    photo: "logo",
  },
  extraReducers: (builder) => {
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});
export const profileReducer = profileSlice.reducer;

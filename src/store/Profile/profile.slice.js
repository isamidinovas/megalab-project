import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    console.log("test registration", response.data);
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ nickname, password }) => {
    const response = await axios
      .post("https://megalab.pythonanywhere.com/login/", {
        nickname,
        password,
      })
      .catch((el) => {
        console.log(el);
      });
    console.log("test login", response.data);
    return response.data;
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    id: 1,
    name: "Symbat",
    surname: "Isamidinove",
    login: "symbat_fronted",
    photo: "logo",
    userToken: undefined,
    errorMessage: "",
  },

  extraReducers: (builder) => {
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log("loginUser.fulfilled", action.payload);
      state.userToken = action.payload;
      state.errorMessage = "";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      console.log("loginUser.error", action.payload);
      state.errorMessage = "password or name incorrect";
    });
  },
});
export const profileReducer = profileSlice.reducer;

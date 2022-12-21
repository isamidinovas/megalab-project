import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
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
    if (!response.status) {
      throw new Error("Server error");
    }
    console.log("respons", response);
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
        console.log("el", el);
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
    registrationErrMessage: "",
    status: null,
  },

  extraReducers: (builder) => {
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.registrationErrMessage = "";
      state.status = "resolved";
    });
    builder.addCase(authenticateUser.rejected, (state, action) => {
      state.status = "rejected";
      state.registrationErrMessage = "Fill in all the fields!";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userToken = action.payload;
      state.errorMessage = "";
      state.status = "resolved";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.errorMessage = "Password or name incorrect!";
    });
  },
});
export const profileReducer = profileSlice.reducer;

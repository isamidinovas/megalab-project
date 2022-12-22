import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";
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
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((el) => {
        console.log("el", el);
      });
    console.log("test login", response.data);
    return response.data;
  }
);

export const accountUser = createAsyncThunk("user/account", async () => {
  const token = localStorage.getItem("token");
  console.log("token", token);
  const response = await axios.get("https://megalab.pythonanywhere.com/user/", {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  if (!response.status) {
    throw new Error("Server error");
  }
  console.log("respons DATTA", response);
  console.log("test  DTATA registration", response.data);
  return response.data;
});

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    userInfo: {
      id: 1,
      name: "",
      last_name: "",
      nickname: "",
      profile_image: "logo",
      surname: "",
      login: "",
      photo: "logo",
    },
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
    builder.addCase(accountUser.fulfilled, (state, action) => {
      console.log("State", state);
      state.userInfo = action.payload;
    });
  },
});
export const profileReducer = profileSlice.reducer;

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
    if (!response.status) {
      throw new Error("Server error");
    }
    return response;
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ nickname, password }) => {
    const response = await axios.post(
      "https://megalab.pythonanywhere.com/login/",
      {
        nickname,
        password,
      }
    );
    return response.data;
  }
);

export const logoutUser = createAsyncThunk("user/logout", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(
    "https://megalab.pythonanywhere.com/logout/",
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});
export const accountUser = createAsyncThunk("user/account", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get("https://megalab.pythonanywhere.com/user/", {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  if (!response.status) {
    throw new Error("Server error");
  }

  return response.data;
});

export const editUserInfo = createAsyncThunk("user/edit", async (data) => {
  const token = localStorage.getItem("token");
  const respons = await axios.put(
    "https://megalab.pythonanywhere.com/user/",
    data,
    {
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return respons.data;
});

export const profileSlice = createSlice({
  name: "profile",
  userId: "",
  initialState: {
    userInfo: {
      name: "",
      last_name: "",
      nickname: "",
      password: "",
      password2: "",
      profile_image: "",
    },
    userToken: undefined,
    errorMessage: "",
    registrationErrMessage: "",
    status: null,
  },

  extraReducers: (builder) => {
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      if (action.payload.data.id) {
        localStorage.setItem("userId", action.payload.data.id);
      }
      state.user = action.payload;
      state.userId = action.payload?.id;
      state.registrationErrMessage = "";
      state.status = "resolved";
    });
    builder.addCase(authenticateUser.rejected, (state, action) => {
      state.status = "rejected";
      state.registrationErrMessage =
        "Ошибка вожможно такой никнейм уже существует";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.userToken = action.payload;
      state.errorMessage = "";
      state.status = "resolved";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.errorMessage = "Пароль или никнейм неправильно ввели !";
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      localStorage.removeItem("token");
    });
    builder.addCase(accountUser.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
    builder.addCase(editUserInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});

export const profileReducer = profileSlice.reducer;

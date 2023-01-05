import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

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
    return response.data;
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
      const { id } = action.payload;
      localStorage.setItem("userId", id);
      state.user = action.payload;
      state.userId = id;
      state.registrationErrMessage = "";
      state.status = "resolved";
    });
    builder.addCase(authenticateUser.rejected, (state, action) => {
      state.status = "rejected";
      state.registrationErrMessage = "Ошибка";
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
      state.userInfo.name = null;
      state.userInfo.last_name = null;
      state.userInfo.nickname = null;
      state.userInfo.password = null;
      state.userInfo.password2 = null;
    });
    builder.addCase(accountUser.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
    builder.addCase(editUserInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});
// const handleClick = () => {
//   Swal.fire("Вы точно хотите выйти из аккаунта?").then(
//     dispatch(logoutUser())
//       .unwrap() // <-- async Thunk returns a promise, that can be 'unwrapped')
//       .then(() => navigate("/registration"))
//   );
// };

// Swal.fire({
//   title: "Точно",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, delete it!",
// }).then((result) => {
//   navigate("/registration");
//   if (result.isConfirmed) {
//     Swal.fire("Deleted!", "Your file has been deleted.", "success").then(
//       dispatch(logoutUser())
//     );
//   }
// });
export const profileReducer = profileSlice.reducer;

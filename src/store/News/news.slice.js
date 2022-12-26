import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// useEffect(() => {
//     const token = localStorage.getItem("token")
//     const myHeaders = new Headers();
//     myHeaders.append('Authorization', Token ${token});
//     fetch("https://megalab.pythonanywhere.com/post/", {
//       method: 'GET',
//       headers:myHeaders,
//     })
//       .then((res) => {
//         if(res.status===200){
//           return res.json();
//         }else {
//           alert("something is wrong" + res.status);
//           // goAuthpage();
//           // navigate("/auth")
//         }
//         })
//       .then((data) => setPosts(data)
//       );
//   }, []);

// export const newsShow = createAsyncThunk("show/news", async () => {
//   const token = localStorage.getItem("token");
//   const response = await axios.get("https://megalab.pythonanywhere.com/post/", {
//     headers: {
//       Authorization: `token ${token}`,
//     },
//   });
//   if (!response.status) {
//     throw new Error("Server error");
//   }
//   console.log("dataaaa", response.data);
//   return response.data;
// });

export const newsShow = createAsyncThunk("show/news", async () => {
  const token = localStorage.getItem("token");
  const response = await axios
    .get("https://megalab.pythonanywhere.com/post/", {
      headers: {
        Authorization: `token ${token}`,
      },
    })
    .then((res) => {
      if (res.status === 201) {
        return res.json();
      }
    })
    .catch(() => {
      throw new Error("Server error");
    })
    .then((data) => {
      setNews(data);
    });

  return response.data;
});

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsInfo: {
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

  //   extraReducers: (builder) => {
  //     builder.addCase(newsShow.fulfilled, (state, action) => {
  //       state.newsInfo = action.payload;
  //     });
  //   },
});

export const newsReducer = newsSlice.reducer;

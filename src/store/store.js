import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "./News/news.slice";
import { newsDetailReducer } from "./News/newsDetails.slice";
import { postReducer } from "./Post/post.slice";
import { profileReducer } from "./Profile/profile.slice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    newsDetail: newsDetailReducer,
    post: postReducer,
    profile: profileReducer,
  },
});

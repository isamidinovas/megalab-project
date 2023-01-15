import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "./News/news.slice";
import { newsDetailReducer } from "./News/newsDetails.slice";
import { postReducer } from "./Post/post.slice";
import { postLikeReducer } from "./Post/postLike.slice";
import { tagsReducer } from "./Post/tag.slice";
import { profileReducer } from "./Profile/profile.slice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    newsDetail: newsDetailReducer,
    post: postReducer,
    profile: profileReducer,
    postLike: postLikeReducer,
    tags: tagsReducer,
  },
});

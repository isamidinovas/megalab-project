import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "./News/news.slice";
import { newsDetailReducer } from "./News/newsDetails.slice";
import { searchReducer } from "./News/newsSearch.slice";
import { postReducer } from "./Post/post.slice";
import { postLikeReducer } from "./Post/postLike.slice";
import { tegsReducer } from "./Post/teg.slice";
import { profileReducer } from "./Profile/profile.slice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    newsDetail: newsDetailReducer,
    post: postReducer,
    profile: profileReducer,
    postLike: postLikeReducer,
    tegs: tegsReducer,
    search: searchReducer,
  },
});

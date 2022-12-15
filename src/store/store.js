
import { configureStore } from '@reduxjs/toolkit';
import {newsReducer} from './News/news.slice'
import { profileReducer } from './Profile/profile.slice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    profile: profileReducer
  },
});

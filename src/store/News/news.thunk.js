import { createAsyncThunk } from "@reduxjs/toolkit";
import { postsService } from "../../service/index.js";

export const getNewsThunk = createAsyncThunk("getNews", () => {
  return postsService.getNews();
});

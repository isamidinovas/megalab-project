import { createSlice } from "@reduxjs/toolkit";
import { newsItemState } from "./news.state";

export const newsSlice = createSlice({
    name: "news",
    initialState: [
        {
            id: 1,
            date: "29.11.2000",
            title: "Заголовок новости",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis", 
            author: "Symbat"
        }
    ],
    reducers: {
        setNews(state, action) {
            state.item = action.payload
        }
    }
})
export const newsReducer = newsSlice.reducer
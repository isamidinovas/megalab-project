import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: "news",
    initialState:
        {
            id: 1,
            name: "Symbat",
            surname: "Isamidinove",
            login: "symbat_fronted", 
            photo: "logo"
        }
    ,
    reducers: {
        setProfile(state, action) {
            state.item = action.payload
        }
    }
})
export const profileReducer = profileSlice.reducer
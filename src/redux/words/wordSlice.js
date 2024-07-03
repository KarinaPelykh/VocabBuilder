import { createSlice } from "@reduxjs/toolkit";
import {
  DeleteWord,
  EditWord,
  GetOwnWords,
  addWord,
  getCategories,
  getStatistics,
} from "./operations";
const initialState = {
  categories: [],
  words: [],
  error: "",
  loader: false,
  statistics: "",
};
export const wordsSlice = createSlice({
  name: "words",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.statistics = action.payload;
      })
      .addCase(addWord.fulfilled, (state, action) => {
        state.words.push(action.payload);
      })
      .addCase(EditWord.fulfilled, (state, action) => {
        const updatedWord = action.payload;
        const index = state.words.findIndex(
          (word) => word._id === updatedWord._id
        );
        if (index !== -1) {
          state.words[index] = updatedWord;
        }
      })
      .addCase(DeleteWord.fulfilled, (state, action) => {
        state.words = state.words.filter(
          (words) => words._id !== action.payload
        );
      })
      .addCase(GetOwnWords.fulfilled, (state, action) => {
        state.words = action.payload;
      }),
});
export const wordsReducer = wordsSlice.reducer;

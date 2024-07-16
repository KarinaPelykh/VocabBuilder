import { createSlice } from "@reduxjs/toolkit";
import {
  DeleteWord,
  EditWord,
  GetOwnWords,
  addWord,
  getCategories,
  getStatistics,
  getWordsAll,
} from "./operations";
const initialState = {
  categories: [],
  words: [],
  allWords: [],
  error: "",
  loader: false,
  statistics: "",
  totalPage: 1,
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
        state.words = action.payload.results;
        state.totalPage = action.payload.totalPages;
      })
      .addCase(getWordsAll.fulfilled, (state, action) => {
        state.allWords = action.payload.results;
        console.log("state", action.payload.totalPages);
        state.totalPage = action.payload.totalPages;
      }),
});
export const wordsReducer = wordsSlice.reducer;

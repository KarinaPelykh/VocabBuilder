import { createSlice } from "@reduxjs/toolkit";
import {
  AddMadeTasks,
  AddNewWord,
  AllTasks,
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
  totals: 0,
  tasks: [],
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
        state.totals = action.payload.totalPages;
      })
      .addCase(AddNewWord.fulfilled, (state, action) => {
        state.words.push(action.payload);
      })
      .addCase(AllTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(AddMadeTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      }),
});
export const wordsReducer = wordsSlice.reducer;

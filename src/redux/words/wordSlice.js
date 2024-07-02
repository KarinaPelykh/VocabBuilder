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
  newWord: [],
  ownWord: [],
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
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getCategories.pending, (state) => {
        state.loader = true;
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.statistics = action.payload;
      })
      .addCase(addWord.fulfilled, (state, action) => {
        state.newWord.push(action.payload);
      })
      .addCase(addWord.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addWord.pending, (state) => {
        state.loader = true;
      })
      .addCase(EditWord.fulfilled, (state, action) => {
        const updatedWord = action.payload;
        const index = state.newWord.findIndex(
          (word) => word._id === updatedWord._id
        );
        if (index !== -1) {
          state.newWord[index] = updatedWord;
        }
      })
      .addCase(DeleteWord.fulfilled, (state, action) => {
        state.newWord = state.newWord.filter(
          (newWord) => newWord._id !== action.payload
        );
      })
      .addCase(GetOwnWords.fulfilled, (state, action) => {
        state.ownWord = action.payload;
      }),
});
export const wordsReducer = wordsSlice.reducer;

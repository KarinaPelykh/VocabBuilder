import { createSlice } from "@reduxjs/toolkit";
import { EditWord, addWord, getCategories, getStatistics } from "./operations";
const initialState = {
  words: [],
  categories: [],
  newWord: [],
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
        state.newWord.push(action.payload);
      }),
});
export const wordsReducer = wordsSlice.reducer;

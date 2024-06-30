import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getStatistics } from "./operations";
const initialState = {
  words: [],
  categories: [],
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
      }),
});
export const wordsReducer = wordsSlice.reducer;

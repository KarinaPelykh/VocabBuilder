import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./operations";
const initialState = {
  words: [],
  categories: [],
  error: "",
  loader: false,
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
      }),
});
export const wordsReducer = wordsSlice.reducer;

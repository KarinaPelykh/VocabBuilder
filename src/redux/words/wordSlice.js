import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  words: [],
};
export const wordsSlice = createSlice({
  name: "words",
  initialState,
  extraReducers: (builder) => builder.addCase,
});
export const wordsReducer = wordsSlice.reducer;

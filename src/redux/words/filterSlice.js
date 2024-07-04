import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: "",
    category: "",
    irregular: false,
  },
  reducers: {
    addFilter(state, action) {
      state.value = action.payload;
    },
    addFilterCategories(state, action) {
      state.category = action.payload.shearCategories;
      state.irregular = action.payload.irregular;
    },
  },
});
export const { addFilter, addFilterCategories } = filterSlice.actions;
export const FilterReducer = filterSlice.reducer;

import { createSelector } from "@reduxjs/toolkit";

export const categoriesSelector = (state) => state.words.categories;
export const statisticsSelector = (state) => state.words.statistics;
export const newWordSelector = (state) => state.words.newWord;
export const ownWordSelector = (state) => state.words.ownWord;
export const wordSelector = createSelector(
  [newWordSelector, ownWordSelector],
  (newWord, ownWord) => {
    return [...newWord, ...ownWord];
  }
);

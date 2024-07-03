import { createSelector } from "@reduxjs/toolkit";

export const categoriesSelector = (state) => state.words.categories;
export const statisticsSelector = (state) => state.words.statistics;
export const newWordSelector = (state) => state.words.words;
// export const filterSelector = (state) => state.words.filter.categories;
// export const filterValueSelector = (state) => state.words.filter.value;
// export const selectFilter = createSelector(
//   [newWordSelector, filterSelector, filterValueSelector],
//   (words, filter) => {
//     return words.filter((word) => {
//       // if (filter.value !== "") {
//       //   word.en.toLowerCase().include(filter.value.toLowerCase());
//       // } else if (filter.categories !== "") {
//       //   word.categories.toLowerCase().includes(filter.categories.toLowerCase());
//       // } else {
//       word.en.toLowerCase().include(filter.toLowerCase());
//       word.categories.toLowerCase().includes(filter.toLowerCase());
//       // }
//     });
//   }
// );

// export const newWordSelector = (state) => state.words.words;
// // export const filterSelector = (state) => state.filter.categories;
// export const filterValueSelector = (state) => state.filter.value;

// export const selectFilter = createSelector(
//   [newWordSelector, filterValueSelector],
//   (words, valueFilter) => {
//     return words.filter((word) => {
//       if (valueFilter !== "") {
//         return word.en.toLowerCase().includes(valueFilter.toLowerCase());
//       }

//       return true; // Повертаємо всі слова, якщо фільтр порожній
//     });
//   }
// );

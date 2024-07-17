import { createSelector } from "@reduxjs/toolkit";

export const categoriesSelector = (state) => state.words.categories;

export const statisticsSelector = (state) => state.words.statistics;

export const newWordSelector = (state) => state.words.words;

export const allWordsSelector = (state) => state.words.allWords;

export const filterValueSelector = (state) => state.filter.value;

export const filterCategoriesSelector = (state) => state.filter.category;

export const filterCategoriesIsIrregularSelector = (state) =>
  state.filter.irregular;

export const selectCategories = createSelector(
  [filterCategoriesSelector, filterCategoriesIsIrregularSelector],
  (categories, irregular) => {
    return { categories, irregular };
  }
);

export const selectFilter = createSelector(
  [newWordSelector, filterValueSelector, selectCategories],
  (words, valueFilter, categoriesFilter) => {
    return words.filter((word) => {
      let matchesIrregularFilter = true;
      if (valueFilter !== "") {
        return word.en.toLowerCase().includes(valueFilter.value.toLowerCase());
      } else if (categoriesFilter !== "") {
        return word.category.includes(categoriesFilter.categories);
      }
      if (categoriesFilter.irregular !== undefined) {
        matchesIrregularFilter =
          word.isIrregular === categoriesFilter.irregular;
      }

      return matchesIrregularFilter;
    });
  }
);

export const selectFilterWords = createSelector(
  [allWordsSelector, filterValueSelector, selectCategories],
  (words, valueFilter, categoriesFilter) => {
    return words.filter((word) => {
      let matchesIrregularFilter = true;
      if (valueFilter !== "") {
        return word.en.toLowerCase().includes(valueFilter.value.toLowerCase());
      } else if (categoriesFilter !== "") {
        return word.category.includes(categoriesFilter.categories);
      }
      if (categoriesFilter.irregular !== undefined) {
        matchesIrregularFilter =
          word.isIrregular === categoriesFilter.irregular;
      }

      return matchesIrregularFilter;
    });
  }
);

export const totalPageSelect = (state) => state.words.totalPage;
export const PageSelect = (state) => state.words.totals;
export const TasksSelect = (state) => state.words.tasks;

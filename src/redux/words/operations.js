import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../Api/api";

export const getCategories = createAsyncThunk(
  "get/categories",
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await instance.get("/words/categories");
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const getStatistics = createAsyncThunk(
  "get/Statistics",
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await instance.get("/words/statistics");
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const addWord = createAsyncThunk(
  "add/words",
  async (
    { en: wordEng, ua: wordUa, category, isIrregular },
    { rejectedWithValue }
  ) => {
    try {
      const { data } = await instance.post("/words/create", {
        en: wordEng,
        ua: wordUa,
        category,
        isIrregular,
      });
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

// export const EditWord = createAsyncThunk(
//   "edit/word",
//   async (
//     { en: wordEN, ua: wordUA, category, isIrregular, id },

//     { rejectedWithValue }
//   ) => {
//     console.log({ en: wordEN, ua: wordUA, category, isIrregular });
//     try {
//       const { data } = await instance.post(`/words/edit/${id}`, {
//         en: wordEN,
//         ua: wordUA,
//         category,
//         isIrregular,
//       });
//       console.log(data);
//       return data;
//     } catch (error) {
//       return rejectedWithValue(error);
//     }
//   }
// );

export const EditWord = createAsyncThunk(
  "edit/word",
  async (
    { en: wordEN, ua: wordUA, category, isIrregular = true, id },
    { rejectWithValue }
  ) => {
    console.log({ en: wordEN, ua: wordUA, category, isIrregular, id });
    try {
      const { data } = await instance.patch(`/words/edit/${id}`, {
        en: wordEN,
        ua: wordUA,
        category,
        isIrregular,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

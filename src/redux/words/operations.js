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
    { en: wordEng, ua: wordUa, category, isIrregular = true },
    { rejectedWithValue }
  ) => {
    try {
      console.log({ en: wordEng, ua: wordUa, category, isIrregular });
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

export const EditWord = createAsyncThunk(
  "edit/word",
  async (
    { en: wordEN, ua: wordUA, category, isIrregular, id },

    { rejectedWithValue }
  ) => {
    try {
      console.log(id);
      const { data } = await instance.patch(`/words/edit/${id}`, {
        en: wordEN,
        ua: wordUA,
        category,
        isIrregular,
      });
      console.log(data);
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const DeleteWord = createAsyncThunk(
  "delete/word",
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`/words/delete/${id}`);

      return data.id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const GetOwnWords = createAsyncThunk(
  "get/ownWord",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/words/own");
      console.log("data", data?.results);
      return data?.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

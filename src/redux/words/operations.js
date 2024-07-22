import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../Api/api";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "get/categories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/words/categories");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getStatistics = createAsyncThunk(
  "get/Statistics",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/words/statistics");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addWord = createAsyncThunk(
  "add/words",
  async (infoAboutBook, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/words/create", infoAboutBook);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const EditWord = createAsyncThunk(
  "edit/word",
  async (
    { en: wordEN, ua: wordUA, category, isIrregular, id },

    { rejectWithValue }
  ) => {
    try {
      const { data } = await instance.patch(`/words/edit/${id}`, {
        en: wordEN,
        ua: wordUA,
        category,
        isIrregular,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
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
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const GetOwnWords = createAsyncThunk(
  "get/ownWord",
  async (searchParam, { rejectWithValue }) => {
    try {
      const { page = 1, limit = 7 } = searchParam;
      const { data } = await instance.get(
        `/words/own?page=${page}&limit=${limit}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getWordsAll = createAsyncThunk(
  "get/all/words",
  async (searchParam, { rejectWithValue }) => {
    try {
      const { page = 1, limit = 7 } = searchParam;
      const { data } = await instance.get(
        `/words/all?page=${page}&limit=${limit}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const AddNewWord = createAsyncThunk(
  "add/newWords",
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/words/add/${id}`);
   
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const AllTasks = createAsyncThunk(
  "get/allTasks",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/words/tasks");
     
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const AddMadeTasks = createAsyncThunk(
  "add/madeTasks",
  async ({ madeTask }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/words/answers", madeTask);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

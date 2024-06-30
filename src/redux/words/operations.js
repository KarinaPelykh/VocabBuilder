import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../Api/api";

export const getCategories = createAsyncThunk(
  "get/categories",
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await instance.get("/words/categories");
      console.log(data);
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

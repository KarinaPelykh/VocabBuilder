import { instance } from "../../Api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userSignUp = createAsyncThunk(
  "user/registration",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/users/signup", {
        name,
        email,
        password,
      });

      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userSignIn = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/users/signin", {
        email,
        password,
      });
      console.log(data);
      return data;
    } catch (error) {}
  }
);

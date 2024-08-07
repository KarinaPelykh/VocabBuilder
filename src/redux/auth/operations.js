import { clear, instance, setToken } from "../../Api/api";
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
      setToken(data.token);

      return data;
    } catch (error) {
      return console.log(error);
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
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const LogOut = createAsyncThunk(
  "user/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await instance.post("/users/signout");
      clear();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const RefreshUser = createAsyncThunk(
  "user/refresh",
  async (_, { rejectWithValue, getState }) => {
    const persist = getState().auth.token;
    if (!persist) {
      return rejectWithValue("None");
    }
    try {
      setToken(persist);
      const { data } = await instance.get("/users/current");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

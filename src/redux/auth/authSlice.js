import { LogOut, RefreshUser, userSignIn, userSignUp } from "./operations";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: { name: "", email: "" },
  token: "",
  loader: false,
  error: "",
  isLoggedIn: false,
  isRefresh: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(userSignUp.pending, (state) => {
        state.loader = true;
      })
      .addCase(userSignIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(LogOut.fulfilled, (state) => {
        state.user = { name: "", email: "" };
        state.token = "";
        state.isLoggedIn = false;
      })
      .addCase(LogOut.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(LogOut.pending, (state) => {
        state.loader = true;
      })
      .addCase(RefreshUser.pending, (state) => {
        state.isRefresh = true;
      })
      .addCase(RefreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefresh = false;
        state.loader = false;
        state.error = null;
        console.log("state isLoggedIn", state.isLoggedIn);
      })
      .addCase(RefreshUser.rejected, (state) => {
        state.isRefresh = false;
        state.loader = false;
      });
  },
});

export const AuthReducer = authSlice.reducer;

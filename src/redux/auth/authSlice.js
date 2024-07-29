import { LogOut, RefreshUser, userSignIn, userSignUp } from "./operations";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: { name: "", email: "" },
  token: "",
  loader: false,
  error: "",
  isLoggedIn: "",
  isRefresh: "",
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

      .addCase(RefreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        console.log("state", state.user, state.isLoggedIn);
      });
  },
});

export const AuthReducer = authSlice.reducer;

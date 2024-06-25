import { userSignIn, userSignUp } from "./operations";

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
      .addCase(userSignUp.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(userSignIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
  },
});

export const AuthReducer = authSlice.reducer;

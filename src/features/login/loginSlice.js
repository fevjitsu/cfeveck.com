import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    displayName: null,
    email: null,
    photoUrl: null,
    error: null,
    emailVerified: null,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setDisplayName: (state, action) => {
      state.displayName = action.payload;
    },
    setPhotoUrl: (state, action) => {
      state.photoUrl = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setEmailVerified: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const {
  setDisplayName,
  setEmail,
  setError,
  setPhotoUrl,
  setEmailVerified,
} = loginSlice.actions;

export const selectDisplayName = (state) => state.login.displayName;
export const selectEmail = (state) => state.login.email;
export const selectError = (state) => state.login.error;
export const selectPhotoUrl = (state) => state.login.photoUrl;
export const selectEmailVerified = (state) => state.login.emailVerified;

export default loginSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
  name: "logged",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    login: (state) => {
      console.log("loggedin");
      return { loggedIn: true };
    },

    logout: (state) => {
      console.log("loggedout");
      return { loggedIn: false };
    },
  },
});
export const { login, logout } = loggedSlice.actions;
export default loggedSlice.reducer;

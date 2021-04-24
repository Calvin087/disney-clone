import { createSlice } from "@reduxjs/toolkit";

// When the app starts, everything is empty.

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user", // name of the slice
  initialState, // initial state
  reducers: {
    // LIST OF ACTIONS
    // When the user logs in, set these deets
    setUserLoginDetails: (state, action) => {
      // ACTION
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    // When the logs out, set these deets tp null
    setSignOutState: (state) => {
      // ACTION
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

// exporting functions from userSlice...
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name; // goes to STORE -> reducer: { user: userReducer }
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer; // Returns the Reducer (object (list of actions))

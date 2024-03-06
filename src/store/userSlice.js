import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    loggedInUser: null,
  },
  reducers: {
    setUser: function (state, action) {
      state.loggedInUser = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const registerUserAsync = (userData) => {
  return async (dispatch, getState) => {
    try {
      
      const { confirmPassword, ...registrationData } = userData;

         const response = await axios.post(
        "https://friendy-social-bc47307e1168.herokuapp.com/users",
        registrationData
      );
      dispatch(setUser(response.data)); 
    } catch (error) {
      console.error("Error registering user:", error);
     
    }
  };
};

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

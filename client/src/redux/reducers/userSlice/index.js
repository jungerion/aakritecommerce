import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token:''
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeToken: (state, actions) => {
      
    }
  }
});

export const { changeToken} = UserSlice.actions;
export default UserSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token: ''
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeToken: (state, actions) => {
      return {
        ...state,
        token: actions.payload
      }
    },
    resetUser:  (state, actions) => {
      return {...initialState}
   },
  }
});
export const { changeToken,resetUser } = UserSlice.actions;
export default UserSlice.reducer;
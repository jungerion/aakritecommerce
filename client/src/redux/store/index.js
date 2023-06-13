import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productSlice from '../reducers/productSlice'
import userSlice from '../reducers/userSlice'



const reducer = combineReducers({
  user: userSlice
  });

const store = configureStore({
  reducer

});

export default store;
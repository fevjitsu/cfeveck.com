import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contact/contactSlice";
export default configureStore({
  reducer: {
    contact: contactReducer,
  },
});

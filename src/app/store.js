import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/forms/contactSlice";
import searchReducer from "../features/search/searchSlice";
export default configureStore({
  reducer: {
    contact: contactReducer,
    search: searchReducer,
  },
});

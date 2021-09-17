import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contact/contactSlice";
import travelAdvisorReducer from "../features/travelAdvisor/travelAdvisorSlice";
import blogReducer from "../features/blog/blogSlice";
import emailReducer from "../features/emailer/emailSlice";
export default configureStore({
  reducer: {
    contact: contactReducer,
    travelAdvisor: travelAdvisorReducer,
    blogger: blogReducer,
    email: emailReducer,
  },
});

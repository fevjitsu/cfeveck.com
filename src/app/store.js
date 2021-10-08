import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import blogReducer from "../features/blog/blogSlice";
import modalReducer from "../features/modal/myModalSlice";
import travelReducer from "../features/travelAdvisor/travelAdvisorSlice";
import contactReducer from "../features/contact/contactSlice";
export default configureStore({
  reducer: {
    login: loginReducer,
    blogger: blogReducer,
    myModal: modalReducer,
    travelAdvisor: travelReducer,
    contact: contactReducer,
  },
});

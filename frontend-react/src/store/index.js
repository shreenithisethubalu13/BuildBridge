import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import siteReducer from "./slices/siteSlice";
import taskReducer from "./slices/taskSlice";
import assignmentReducer from "./slices/assignmentSlice";
import logReducer from "./slices/logSlice";
import inquiryReducer from "./slices/inquirySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sites: siteReducer,
    tasks: taskReducer,
    assignments: assignmentReducer,
    logs: logReducer,
    inquiries: inquiryReducer,
  },
});

export default store;
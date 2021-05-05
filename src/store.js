import { configureStore } from "@reduxjs/toolkit";

import questionReducer from "./features/questionSlice";
import userReducer from "./features/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
  },
});

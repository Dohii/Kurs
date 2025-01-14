import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    userReducer,
  },
});

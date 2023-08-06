import { configureStore } from "@reduxjs/toolkit";
import Slices from "./slices";
export const store = configureStore({
  reducer:Slices
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

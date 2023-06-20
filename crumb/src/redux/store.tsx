import { configureStore } from "@reduxjs/toolkit";
import { booksApiSlice } from "../services/ApiSlice";


export const store = configureStore({
  reducer: {
    [booksApiSlice.reducerPath]: booksApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(booksApiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

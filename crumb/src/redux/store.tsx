import { configureStore } from "@reduxjs/toolkit";
import { booksApiSlice } from "../services/ApiSlice";
import { tableBooksSlice } from "./storeFeatures/tableBooksSlice";


export const store = configureStore({
  reducer: {
    tableBooks: tableBooksSlice.reducer,
    [booksApiSlice.reducerPath]: booksApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(booksApiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

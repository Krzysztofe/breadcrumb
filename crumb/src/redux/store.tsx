import { configureStore } from "@reduxjs/toolkit";
import { columnsApiSlice } from "../services/ApiSlice";


export const store = configureStore({
  reducer: {
    
    [columnsApiSlice.reducerPath]: columnsApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(columnsApiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { formLiteApi } from "@/api/formsLiteApi";

export const store = configureStore({
  reducer: {
    [formLiteApi.reducerPath]: formLiteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(formLiteApi.middleware),
});

setupListeners(store.dispatch);

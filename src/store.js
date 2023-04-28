import { configureStore } from "@reduxjs/toolkit";
import { collectionsReducer } from "./reducers/collectionsReducer";

export const store = configureStore({
  reducer: {
    collections: collectionsReducer,
  },
});

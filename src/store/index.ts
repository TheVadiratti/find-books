import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { booksSlice } from "@/components/entities";
import { searchSlice, paginationSlice } from "@/components/features";

const rootReducer = combineReducers({
  booksSlice,
  searchSlice,
  paginationSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;

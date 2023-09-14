import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import searchSlice from "@/components/features/search-books/model/store/searchSlice";
import paginationSlice from "@/components/features/pagination/model/store/paginationSlice";

const rootReducer = combineReducers({ searchSlice, paginationSlice });

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import searchSlice from "@/components/features/search-books/store/searchSlice";

const rootReducer = combineReducers({ searchSlice });

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;

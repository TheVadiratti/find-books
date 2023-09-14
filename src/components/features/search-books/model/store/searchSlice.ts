/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { Book } from "@/store/types/types";
import { CATEGORIES, SORTING_BY } from "../../lib/constants/select";

interface InitialState {
  foundTotal: string | null;
  foundBooks: Book[];
  inputs: {
    search: string;
    category: string;
    sortingBy: string;
  };
  status: {
    isFetching: boolean;
    isError: boolean;
    isSuccess: boolean;
    error: string;
  };
}

const initialState: InitialState = {
  foundTotal: null,
  foundBooks: [],
  inputs: {
    search: "",
    category: CATEGORIES[0],
    sortingBy: SORTING_BY[0],
  },
  status: {
    isFetching: false,
    isError: false,
    isSuccess: false,
    error: "",
  },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFoundBooks(state, action) {
      state.foundTotal = action.payload.total;
      state.foundBooks = action.payload.items;
    },

    addMoreBooks(state, action) {
      state.foundBooks.push(...action.payload);
    },

    resetBooks(state) {
      state.foundBooks = initialState.foundBooks;
      state.foundTotal = initialState.foundTotal;
    },

    enterSearchInput(state, action) {
      state.inputs.search = action.payload;
    },

    changeCategoryFilter(state, action) {
      state.inputs.category = action.payload;
    },

    changeSortingByFilter(state, action) {
      state.inputs.sortingBy = action.payload;
    },

    getBooksRequest(state) {
      state.status.isError = false;
      state.status.isSuccess = false;
      state.status.isFetching = true;
      state.status.error = initialState.status.error;
    },

    getBooksError(state, action) {
      state.status.isFetching = false;
      state.status.isError = true;
      state.status.error = action.payload;
    },

    getBooksSuccess(state) {
      state.status.isFetching = false;
      state.status.isSuccess = true;
    },
  },
});

export default searchSlice.reducer;
export const {
  setFoundBooks,
  addMoreBooks,
  resetBooks,
  enterSearchInput,
  changeCategoryFilter,
  changeSortingByFilter,
  getBooksRequest,
  getBooksError,
  getBooksSuccess,
} = searchSlice.actions;

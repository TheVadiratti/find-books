/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { Book } from "@/components/entities/book-card/model/types";

interface InitialState {
  foundTotal: string | null;
  foundBooks: Book[];
}

const initialState: InitialState = {
  foundTotal: null,
  foundBooks: [],
};

const booksSlice = createSlice({
  name: "books",
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
  },
});

export default booksSlice.reducer;
export const { setFoundBooks, addMoreBooks, resetBooks } = booksSlice.actions;

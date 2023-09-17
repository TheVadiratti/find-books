/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { paginationStep } from "../config/pagination";

interface InitialState {
  startIndex: number;
}

const initialState: InitialState = {
  startIndex: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    incrementPagination(state) {
      state.startIndex += paginationStep;
    },
    resetPagination(state) {
      state.startIndex = 0;
    },
  },
});

export default paginationSlice.reducer;
export const { incrementPagination, resetPagination } = paginationSlice.actions;
